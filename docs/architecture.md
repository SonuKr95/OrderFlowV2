# 🧠 Architecture Overview

## 🎯 Goal

Design a system that ensures:

- No overselling
- Consistent inventory under concurrent operations
- Secure, role-based access
- Minimal frontend complexity

---

## 🏗 System Design

### Frontend

- React + Redux Toolkit → UI & client state
- TanStack Query → server state, caching, refetching
- React Router → route protection

### Backend (Supabase)

- PostgreSQL → source of truth
- RPC Functions → business logic layer
- Row Level Security (RLS) → authorization enforcement
- JWT → authentication & session handling

---

## 🔐 Authentication & Authorization

### Authentication

- JWT-based auth via Supabase
- Session persisted on client (localStorage)
- User state rehydrated on app load

### Authorization (Defense in Depth)

- Frontend route guards (UX-level protection)
- Backend enforcement via RLS (source of truth)

Roles:

- **Admin** → full access
- **Staff** → limited actions
- **Anonymous** → read-only access

---

## ⚡ Backend Logic Strategy (RPC)

Instead of handling logic on frontend:

- Moved critical operations into PostgreSQL functions

Used for:

- Order creation (transaction-safe)
- Inventory updates (transaction-safe)
- Product search
- Dashboard aggregation

Benefits:

- Reduced API calls
- Consistent logic
- Better performance

---

## 🔄 Concurrency & Data Integrity

### Problem

Multiple users updating stock simultaneously → inconsistent inventory

### Solution

- Row-level locking (`FOR UPDATE`)
- Wrapped operations in PostgreSQL transactions

Ensures:

- No race conditions
- Atomic operations
- Valid stock state at all times

---

## 📊 Data Flow

1. UI triggers action (e.g., create order)
2. React Query calls RPC
3. PostgreSQL:
   - Locks required rows
   - Validates data
   - Executes transaction
4. Response returned → UI updated

---

## 🧩 State Management Strategy

- **Redux Toolkit** → cart & UI state
- **TanStack Query** → server data

Separation ensures:

- Predictability
- Reduced bugs
- Easier scaling

---

## ⚠️ Key Design Principles

- Push logic to database, not frontend
- Treat database as single source of truth
- Prevent invalid states, don’t fix them later
- Secure at DB level, not just UI
