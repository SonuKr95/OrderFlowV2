## 🚀 Order Flow

**Manage your orders efficiently**

<img width="1920" height="911" alt="Image" src="https://github.com/user-attachments/assets/f710235a-a482-4d49-8e3d-745d6b91d121" />

---

## 🌐 Live Demo

👉 **[View Live App](https://ubiquitous-torrone-a4837b.netlify.app)**

---

## 📌 Overview

**Order Flow** is a full-stack order and inventory management system built for real-world business workflows.

It focuses on **data consistency, role-based access control, and transactional integrity** — not just UI.

Core operations like inventory updates and order creation are handled using **PostgreSQL RPC functions with row-level locking and transactions**, ensuring reliability under concurrent usage.

---

## 🔥 Key Highlights

- Prevents overselling using PostgreSQL transactions & row-level locking
- Handles concurrent order creation safely
- Enforced role-based access with Supabase RLS
- Real-world inventory + order coupling system
- Persistent auth with secure role verification (RLS enforced)

---

## 🛠 Tech Stack

**Frontend**

- HTML
- Tailwind CSS
- React.js
- React Router
- Redux Toolkit
- TanStack Query

**Backend / Database**

- Supabase
- PostgreSQL (RPC functions, transactions, row locking)

---

## 🔐 Authentication & Access

- Login Page (default home route)
- Supports:
  - Admin Login
  - Staff Login
  - Anonymous (Viewer) Login

### Roles

| Role   | Access                   |
| ------ | ------------------------ |
| Admin  | Full access              |
| Staff  | Limited access           |
| Viewer | Read-only (RLS enforced) |

> Viewer users can explore the full app UI, but all write operations are blocked via Row Level Security (RLS).

---

## 🔐 Session Persistence & Secure Role Handling

Authentication state is persisted across page refreshes using Supabase session management.

### ✅ How it works

- User session is automatically restored on refresh using Supabase Auth
- JWT is stored and managed by Supabase (no manual token handling)
- On app load:
  - Session is retrieved
  - Authenticated user is restored
  - User role is resolved securely

### 🔒 Role Verification (Important)

User roles are **NOT trusted from the frontend alone**.

- Role is fetched from the database (profiles table) or validated via Supabase-issued JWT claims
- All sensitive operations are enforced using **Row Level Security (RLS)** policies in the database

This ensures:

- No privilege escalation via client-side manipulation
- Secure access control even if the frontend is bypassed

---

## ⚙️ Core Features

### 🧾 Product Management

- Add products with **unique SKU (DB constraint)**
- Editable:
  - Product Name
  - Selling Price
  - MRP
- Non-editable:
  - SKU
  - Category
- **Soft Delete System**
  - Deleted products move to Archive
  - Can be restored anytime

---

### 📦 Inventory Management

- Manual stock adjustments:
  - Add Stock
  - Reduce Stock
- Requires:
  - Adjustment Type
  - Adjustment Reason

#### ⚠️ Critical Logic

- Implemented using:
  - PostgreSQL transactions
  - Row-level locking
- Prevents:
  - Race conditions
  - Negative stock updates
- Validation handled via RPC functions

---

### 🛒 Order Creation Flow

1. Select Customer:
   - Guest Checkout
   - Named Customer (Name + Mobile)

2. Product Search:
   - Backend RPC search
   - Frontend debouncing

3. Cart Management:
   - Managed via Redux Store
   - Auto total calculation

4. Payment Selection

5. Submit Order

---

### 🔒 Order Processing (Important)

- Order submission is handled via:
  - PostgreSQL RPC Transaction
  - Row Locking on Product Records

This ensures:

- No overselling
- Consistent stock updates
- Safe concurrent usage

---

### 🔢 Order System

- Unique Order Number Format:
  YEAR-INCREMENT

---

### 📊 Dashboard

Displays:

- Today’s Sales
- Orders Today
- Low Stock Count
- Out of Stock Count
- Recent 5 Orders
- Quick Action Buttons

---

### 📄 Order Management

- View all orders
- Click to view detailed order info
- Data fetched via RPC using order ID

---

### 🔐 Route Protection

- Role-based frontend access
- Backend enforced via:
  - JWT
  - Row Level Security (RLS)

---

### 👨‍💼 Staff Permissions

Staff can:

- Add Products
- Manage Products
- Create Orders
- View Orders

Restricted from:

- Admin-level operations
- Sensitive routes

---

## 🧱 Database & Backend Logic

All database schema, RLS policies, and RPC functions are available in `/db`  
with documentation in `/docs` explaining architecture and decisions.

---

## 🔑 Demo Credentials

Admin Login:  
Email: admin[@]example[.]com \
Password: 7?CXva$76sw!

Staff Login:  
Email: staff[@]example[.]com  
Password: 7+5p4]Uud2

---

## ⚠️ Disclaimer

This project is for demonstration and evaluation purposes only.

- Do NOT input sensitive, personal, or financial data
- Data may be reset or modified without notice
- Security is implemented for learning and showcase purposes, not production compliance

---
