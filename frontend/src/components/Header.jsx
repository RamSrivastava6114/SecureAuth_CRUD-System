import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="bg-blue-500 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">MERN Auth</Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:text-blue-200">Home</Link></li>
            {user ? (
              <>
                <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
                <li><button onClick={logout} className="hover:text-blue-200">Logout</button></li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:text-blue-200">Login</Link></li>
                <li><Link to="/register" className="hover:text-blue-200">Register</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;