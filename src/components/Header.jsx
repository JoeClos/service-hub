import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white shadow px-4 py-4 md:px-10 border-b">
      <div className="flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-blue-700">
          Helsinki Cultural Compass
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-700">
          🏠 Home
          </Link>
          <Link to="#" className="hover:text-blue-700">🌐 Language</Link>
          <Link to="#" className="hover:text-blue-700">
            🔐 Sign In
          </Link>
          {/* <Link to="/timeline/young-adult" className="hover:text-blue-700">
            Timeline
          </Link>
          <Link to="/scenario/sara" className="hover:text-blue-700">
            Scenarios
          </Link> */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
