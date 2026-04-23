# 🔄 Core Flows

---

## 🧾 Order Creation Flow

### Goal

Create order without causing inconsistent stock

### Steps

1. Select customer
   - Guest OR saved customer
2. Add products to cart
   - Managed via Redux
3. Submit order → RPC call

---

### Backend Flow (PostgreSQL Function)

1. Begin transaction

2. Extract payload
   - customer_id
   - product list (sanitizedProducts)

3. Resolve customer
   - If not guest → fetch from DB
   - Validate existence

---

### Phase 1: Locking (Concurrency Control)

4. Iterate products:
   - Lock each inventory row (`FOR UPDATE`)
   - Fail if inventory record missing

✔ Ensures exclusive access before validation

---

### Phase 2: Validation (Post-lock)

5. Iterate products again:
   - Validate quantity > 0
   - Check available stock

✔ Prevents race conditions (validation after lock)

---

### Phase 3: Calculation

6. Iterate products:
   - Fetch price + tax
   - Compute:
     - subtotal
     - tax
     - total amount

✔ Uses DB as source of truth (not client values)

---

### Phase 4: Order Creation

7. Generate order number
8. Insert order record

---

### Phase 5: Execution (Critical Section)

9. Iterate products:
   - Insert order_items
   - Update inventory:
     - `quantity = quantity - qty`
     - Guard: `WHERE quantity >= qty`
   - Detect concurrent update via `NOT FOUND`
   - Insert inventory transaction log

✔ Ensures atomic order processing

---

### Completion

10. Commit transaction

---

### Failure Handling

- Any exception → full rollback
- Covers:
  - Invalid customer
  - Invalid quantity
  - Insufficient stock
  - Concurrent update conflict

---

### Guarantees

- No overselling
- No partial writes
- Consistent stock

---

## 📦 Inventory Update Flow

### Goal

Safely adjust stock manually

### Steps

1. Select product
2. Choose:
   - Add stock
   - Reduce stock
3. Insert quantity
4. Select reason

---

### Backend Flow

1. Begin transaction
2. Extract payload

3. Basic validation:
   - Quantity must be > 0

4. Lock inventory row (`FOR UPDATE`)
   - Ensures no concurrent modification

5. Critical validation:
   - Prevent reducing below available quantity

6. Update inventory:
   - Add OR reduce based on type

7. Insert inventory_transactions log

8. Commit

---

### Failure Handling

- Invalid input → reject
- Insufficient stock → exception → rollback
- Missing inventory record → exception → rollback

---

### Guarantees

- No invalid stock state
- Full audit trail

---

## 🔍 Product Search Flow

### Goal

Efficient product lookup during order creation

### Flow

1. User types query
2. Debounced input (frontend)
3. RPC function executes search
4. Results returned

---

## 📊 Dashboard Flow

### Goal

Show aggregated business data efficiently

### Flow

1. Single RPC call
2. Extract the role from the JWT
   - To ensure only admin can get the dashboard statistics
3. Database computes:
   - Today sales
   - order count
   - stock metrics
   - recent 5 orders
4. Return aggregated result

---

### Benefit

- Avoids multiple queries
- Reduces frontend complexity

---

## 🔐 Auth Flow

1. User logs in → receives JWT
2. Token stored in client
3. On refresh:
   - session restored
4. Requests include JWT
5. RLS enforces access

---

## ⚠️ Failure Handling

- Transaction rollback on any failure
- Prevents partial updates
- Ensures system consistency
