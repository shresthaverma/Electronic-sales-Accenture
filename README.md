Electronics Hub
Table of Contents
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)
- [License](#license)
Features
- User authentication (Login/Signup)
- Product categories including Phones, Audio Products, and Accessories
- Add to cart functionality with quantity management
- Notification system for adding items to the cart
- Responsive design for mobile and desktop views
- CRUD operations for managing products
Technologies Used
- **Frontend:** React, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Package Manager:** npm
- **Routing:** React Router
Setup and Installation
Prerequisites
- Node.js and npm installed on your machine
- MongoDB installed locally or use MongoDB Atlas
Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Set up your database configuration:
   - Edit `config/db.js` to include your MongoDB connection string.
4. Start the backend server:
   ```bash
   node server.js
   ```
Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install the required dependencies:
   ```bash
   npm install
   ```
3. Start the React application:
   ```bash
   npm start
   ```
Usage
- Visit `http://localhost:3000` in your browser to access the application.
- Register or log in to access the full features of the app.
- Browse through the featured categories and add products to your cart.
- Interact with the notification system to see when items are added to the cart.
API Endpoints
Product Routes
- **GET** `/api/products` - Retrieve all products
- **POST** `/api/products` - Add a new product
- **PUT** `/api/products/:id` - Update a product by ID
- **DELETE** `/api/products/:id` - Delete a product by ID
User Authentication Routes
- **POST** `/api/auth/signup` - Register a new user
- **POST** `/api/auth/login` - Login an existing user
Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.# Electronic-sales-Accenture
