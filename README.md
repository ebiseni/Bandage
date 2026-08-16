# Bandage 

A modern e-commerce web application built with **React, TypeScript, Redux Toolkit, RTK Query, and Vite**. Bandage provides a responsive shopping experience with product browsing, wishlist management, cart functionality, quantity controls, persistent client-side state, and API-powered product data.

##  Live Demo

👉 [View Bandage Live](https://bandage-indol.vercel.app/)

## 📂 GitHub Repository

👉 [View the Source Code](https://github.com/ebiseni/Bandage)

---

##  About the Project

Bandage is a frontend e-commerce application designed to demonstrate how a modern React application can manage both remote API data and complex client-side state.

The project uses **Redux Toolkit** for global state management and **RTK Query** for fetching product data from the DummyJSON API. The application separates its state into dedicated feature slices for the shopping cart and wishlist, while the API layer is handled independently through an RTK Query API service.

The architecture is organised around feature-based folders, making the application easier to maintain, extend, and scale.

---

##  Key Features

### Shopping Cart

The application provides a fully functional shopping cart powered by Redux Toolkit.

Users can:

* Add products to the cart
* Remove products from the cart
* Increase product quantities
* Decrease product quantities
* Automatically increase the quantity when an existing product is added again
* Maintain cart contents when the page is refreshed

Cart data is persisted to `localStorage` using the `bandage_cart` storage key, allowing cart contents to survive browser refreshes.

###  Wishlist

Bandage also includes a dedicated wishlist system.

Users can:

* Add products to their wishlist
* Remove products from their wishlist
* Toggle products in and out of the wishlist
* Maintain wishlist data after refreshing the page

Wishlist state is persisted using `localStorage` with the `bandage_wishlist` storage key.

### 🔄 Redux Toolkit State Management

Redux Toolkit is used to manage application-wide state in a structured and scalable way.

The project separates state into dedicated slices:

```text
Cart State
    ↓
cartSlice.ts

Wishlist State
    ↓
wishlistSlice.ts

Product API State
    ↓
productsApi.ts
```

The cart and wishlist features use `createSlice` and typed `PayloadAction`s to define their state transitions and actions.

### 🌐 RTK Query

Product data is handled using **RTK Query**.

The project creates a dedicated `productsApi` service using:

* `createApi`
* `fetchBaseQuery`
* Query endpoints
* Automatically generated React hooks

The API uses:

```text
https://dummyjson.com/
```

and provides a `getBestsellerProducts` query with support for `limit` and `skip` parameters.

The generated query hook is consumed by React components to retrieve product data without having to manually manage loading, request, and response state.

### 🏪 Redux Store Configuration

The application's Redux store combines the major state domains:

```text
Redux Store
├── productsApi
├── cart
└── wishlist
```

The RTK Query middleware is also added to the store alongside Redux Toolkit's default middleware.

The application then exposes this store to the React component tree through React Redux's `<Provider>`.

---

## 🧠 State Management Architecture

The application's state management can be represented as:

```text
                         BANDAGE APP
                              │
                              ▼
                       Redux Provider
                              │
                              ▼
                       Redux Toolkit Store
                    ┌─────────┼─────────┐
                    │         │         │
                    ▼         ▼         ▼
              Products API   Cart    Wishlist
                    │         │         │
                    ▼         ▼         ▼
                RTK Query   Slice     Slice
                    │         │         │
                    ▼         ▼         ▼
              DummyJSON API localStorage localStorage
```

This separation keeps **server/API data** and **client-side application state** logically organised.

---

## 🛠️ Tech Stack

### Frontend

* **React 19**
* **TypeScript**
* **React Router**
* **CSS**

### State Management

* **Redux Toolkit**
* **React Redux**
* **Redux Slices**
* **RTK Query**

### API

* **DummyJSON API**
* `fetchBaseQuery`

### Development

* **Vite**
* **ESLint**
* **TypeScript**

### Deployment

* **Vercel**

The repository's `package.json` confirms the use of React, React Redux, Redux Toolkit, React Router, TypeScript, and Vite.

---

## 📁 Project Structure

```text
Bandage/
│
├── public/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │
│   ├── features/
│   │   ├── api/
│   │   │   ├── dummyJsonApi.ts
│   │   │   └── productsApi.ts
│   │   │
│   │   ├── cart/
│   │   │   └── cartSlice.ts
│   │   │
│   │   └── wishlist/
│   │       └── wishlistSlice.ts
│   │
│   ├── pages/
│   │
│   ├── routes/
│   │
│   ├── store/
│   │   ├── hooks.ts
│   │   └── store.ts
│   │
│   ├── styles/
│   │
│   ├── types/
│   │
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
│
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
└── eslint.config.js
```

The actual repository uses a feature-based structure containing `api`, `cart`, `wishlist`, `store`, `components`, `pages`, `routes`, `styles`, and `types`.

---

## 🔧 Redux Implementation

### Cart Slice

The cart is implemented as a dedicated Redux slice:

```text
src/features/cart/cartSlice.ts
```

It manages actions including:

```text
addToCart
removeFromCart
incrementQuantity
decrementQuantity
```

When a product already exists in the cart, its quantity is incremented rather than creating a duplicate cart item.

### Wishlist Slice

Wishlist state is implemented separately:

```text
src/features/wishlist/wishlistSlice.ts
```

The slice provides:

```text
toggleWishlist
removeFromWishlist
```

The toggle behaviour allows a product to be added or removed from the wishlist depending on whether it already exists in the current state.

---

## 🌐 RTK Query Implementation

The product API is defined in:

```text
src/features/api/productsApi.ts
```

The API service uses:

```typescript
createApi()
```

with:

```typescript
fetchBaseQuery()
```

and exposes a product query through a generated React hook.

Conceptually:

```text
React Component
       │
       ▼
useGetBestsellerProductsQuery()
       │
       ▼
productsApi
       │
       ▼
RTK Query
       │
       ▼
fetchBaseQuery
       │
       ▼
DummyJSON API
       │
       ▼
Product Data
```

RTK Query handles the API request lifecycle and stores the resulting API state within the Redux store.

---

## 💾 Local Storage Persistence

Bandage uses browser `localStorage` to persist shopping-related state.

### Cart

```text
bandage_cart
```

### Wishlist

```text
bandage_wishlist
```

This means that cart and wishlist contents can remain available after a browser refresh instead of being lost when the React application is reloaded.

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have the following installed:

* Node.js
* npm
* Git

### Clone the Repository

```bash
git clone https://github.com/ebiseni/Bandage.git
```

### Navigate to the Project

```bash
cd Bandage
```

### Install Dependencies

```bash
npm install
```

### Start the Development Server

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173
```

---

## 🏗️ Production Build

Create a production build with:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

Run ESLint:

```bash
npm run lint
```

These commands are defined in the project's `package.json`.

---

## 🚀 Deployment

The application is deployed on **Vercel**.

### Live Application

👉 https://bandage-indol.vercel.app/

### Source Code

👉 https://github.com/ebiseni/Bandage

---

## 📱 Responsive Experience

The application is designed to provide a consistent shopping experience across different screen sizes, including:

* Desktop
* Tablet
* Mobile

---

## 🎯 Technical Highlights

This project demonstrates practical experience with:

* Building a React application with TypeScript
* Designing a feature-based project structure
* Managing global state with Redux Toolkit
* Creating and configuring Redux slices
* Configuring a central Redux store
* Implementing RTK Query for API data fetching
* Using generated RTK Query hooks
* Managing API state separately from local application state
* Persisting Redux-managed data with `localStorage`
* Building reusable React components
* Working with React Router
* Using TypeScript interfaces and typed Redux actions
* Deploying a production React application with Vercel

---

## 📚 What I Learned

Through this project, I strengthened my understanding of:

* Global state management with Redux Toolkit
* Feature-based Redux architecture
* Redux slice design
* Store and middleware configuration
* RTK Query and API integration
* Client-side data persistence
* Managing shopping cart state
* Implementing wishlist functionality
* Connecting API data with React components
* Type-safe frontend development with TypeScript
* Building and deploying production-ready React applications

---

## 🔮 Future Improvements

Potential improvements include:

* User authentication
* Persistent user accounts
* Backend-powered cart and wishlist synchronisation
* Product search
* Advanced product filtering
* Product reviews and ratings
* Checkout and payment integration
* Order history
* Server-side persistence for cart and wishlist
* Additional API integrations

---

## 👨‍💻 Author

**Ebiseni**

* GitHub: https://github.com/ebiseni
* Repository: https://github.com/ebiseni/Bandage
* Live Demo: https://bandage-indol.vercel.app/

---

## 📄 License

This project is intended for educational and portfolio purposes.
