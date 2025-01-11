# E-Commerce Store

## About the Project

The **E-Commerce Store** is a fully functional web application built using the **MERN stack** (MongoDB, Express.js, React, and Node.js). The application includes user authentication, product management, and order handling, providing a seamless shopping experience for customers.

---

## Features

- **User Authentication**:
  - Secure login and registration.
  - Password hashing with bcrypt.
  - Token-based authentication using JWT.

- **Product Management**:
  - Display a list of products with pagination.
  - Detailed product descriptions.
  - Admin functionality to add, edit, and delete products.

- **Shopping Cart**:
  - Add, remove, and update product quantities.
  - Persistent cart data using local storage.

- **Order Management**:
  - Users can place orders and view order history.
  - Admins can mark orders as delivered.

- **Payment Integration**:
  - Integrated payment system for checkout.

- **Responsive Design**:
  - Fully responsive interface for desktop and mobile users.

---

## Technology Stack

### Frontend
- **React.js**:
  - Component-based UI for a dynamic and interactive experience.
  - State management using Context API or Redux.

### Backend
- **Node.js** and **Express.js**:
  - RESTful API for handling product, user, and order data.

### Database
- **MongoDB**:
  - NoSQL database for storing user, product, and order data.

### Authentication
- **JWT (JSON Web Tokens)**:
  - Secure user authentication and session management.

---

## File Structure

### Backend
- **`config/`**: Configuration files for database and environment variables.
- **`controllers/`**: Logic for handling API requests.
- **`models/`**: Mongoose schemas for MongoDB collections.
- **`routes/`**: Express routes for users, products, and orders.
- **`middleware/`**: Custom middleware for authentication and error handling.

### Frontend
- **`components/`**: Reusable React components such as forms, buttons, and navigation.
- **`screens/`**: Page-level components for displaying products, cart, and user profile.
- **`slices/`**: State management logic using Redux Toolkit.
- **`utils/`**: Helper functions for data processing.

---

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local or cloud-based instance)
- **npm** or **yarn**

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ecommerce-mern-store.git
   cd ecommerce-mern-store
   ```

2. Install dependencies for both frontend and backend:
   ```bash
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Set up environment variables:
   - Create a `.env` file in the `backend` folder and add:
     ```env
     NODE_ENV=development
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
   ```

4. Start the backend server:
   ```bash
   cd backend
   npm run dev
   ```

5. Start the frontend server:
   ```bash
   cd frontend
   npm start
   ```

6. Open your browser and navigate to [http://localhost:3000](http://localhost:3000).

---

## API Endpoints

### User Authentication
- `POST /api/users/login`: Authenticate a user and return a token.
- `POST /api/users/register`: Register a new user.

### Products
- `GET /api/products`: Fetch all products with pagination.
- `GET /api/products/:id`: Fetch a single product by ID.

### Orders
- `POST /api/orders`: Create a new order.
- `GET /api/orders/:id`: Fetch an order by ID.

---

## Scripts

- `npm run dev`: Run the backend server in development mode.
- `npm start`: Start the frontend server.
- `npm run build`: Build the React frontend for production.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/YourFeature
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "Add YourFeature"
   ```
4. Push the branch:
   ```bash
   git push origin feature/YourFeature
   ```
5. Open a Pull Request.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.

---

This README provides a comprehensive overview of the E-Commerce Store project built with the MERN stack. Feel free to explore, contribute, and expand upon this project!
