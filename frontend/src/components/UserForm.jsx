import React from 'react';

function UserForm({ title, onSubmit, email, setEmail, password, setPassword, name, setName, buttonText }) {
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <form onSubmit={onSubmit} className="space-y-4">
        {setName && (
          <div>
            <label htmlFor="name" className="block mb-1">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
        )}
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
          {buttonText}
        </button>
      </form>
    </div>
  );
}

export default UserForm;