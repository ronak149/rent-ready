import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
const Header = () => {
  return (
    <header className="py-6 mb-12 shadow">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/">
          <h2 className="font-bold text-4xl">
            Rent<span className="text-blue-700">Ready</span>
          </h2>
        </Link>
        <div className="flex items-center gap-6 text-xl">
            - Find your perfect home, with Rent Ready
        </div>
      </div>
    </header>
  );
};

export default Header;
