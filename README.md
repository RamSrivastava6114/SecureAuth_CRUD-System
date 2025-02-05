
# Full Stack Authentication Project

This is a full stack project that includes user authentication, user management, and password management functionalities. The backend is built with Node.js, Express, and MongoDB, while the frontend is built with React and Tailwind CSS.

 Functionalities

- User registration and login with JWT authentication
- User dashboard displaying user information
- Password update functionality
- Account deletion functionality
- Protected routes to ensure only authenticated users can access certain pages
- Logout functionality

 Technologies and Libraries Used

 Backend
- Node.js
- Express
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcrypt
- cors
- dotenv

 Frontend
- React
- React Router
- Tailwind CSS
- Axios

 Project Setup

 Backend Setup

1. Clone the repository

   ```sh
   git clone <repository-url>
   cd <repository-directory>/backend
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Set up environment variables

   Create a `.env` file in the `backend` directory with the following variables:

   ```env
   MONGO_URI=<your-mongodb-uri>
   JWT_SECRET=<your-jwt-secret>
   ```

4. Run the backend server

   ```sh
   npm start
   ```

   The backend server should now be running on `http://localhost:5000`.

 Frontend Setup

1. Navigate to the frontend directory

   ```sh
   cd ../frontend
   ```

2. Install dependencies

   ```sh
   npm install
   ```

3. Set up environment variables

   Create a `.env` file in the `frontend` directory with the following variable:

   ```env
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Run the frontend development server

   ```sh
   npm start
   ```

   The frontend development server should now be running on `http://localhost:3000`.

 File Structure

 Backend

- `server.js`: Entry point of the backend application.
- `config/db.js`: MongoDB connection setup.
- `middleware/jwtAuthMiddleware.js`: JWT authentication middleware.
- `models/User.js`: User model schema.
- `routes/auth.js`: Authentication routes.
- `controllers/authController.js`: Authentication controller functions.

 Frontend

- `src/`: Source directory for React application.
  - `components/`: React components.
    - `Home.jsx`: Home page component.
    - `Login.jsx`: Login page component.
    - `Register.jsx`: Registration page component.
    - `Dashboard.jsx`: User dashboard component.
    - `ProtectedRoute.jsx`: Protected route component.
  - `context/`: React context for authentication.
    - `AuthContext.jsx`: Authentication context provider.
  - `services/`: API service functions.
    - `api.js`: Axios API service functions.
  - `App.jsx`: Main application component.
  - `index.js`: Entry point of the React application.

 Usage

 Register

- Navigate to `/register`.
- Fill out the registration form and submit.

 Login

- Navigate to `/login`.
- Fill out the login form and submit.
- Upon successful login, you will be redirected to the dashboard.

 Dashboard

- After logging in, navigate to `/dashboard`.
- View user information, update password, and delete account.

 Logout

- Click the logout button to log out and be redirected to the home page.

 Protected Routes

- Routes that require authentication are wrapped with the `ProtectedRoute` component to ensure only authenticated users can access them.




