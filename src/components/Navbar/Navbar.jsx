import PropTypes from "prop-types";


export default function Navbar({ darkMode, toggleDarkMode }) {
  return (
    <nav className="bg-gray-800 py-3 shadow-sm fixed top-0 left-0 w-full z-50 m">
      <div className="container text-white p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">E-commerce</h1>

        {/* <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 before:-bottom-1 before:left-0 before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-full ${
                  isActive ? "before:w-full font-semibold" : ""
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 before:-bottom-1 before:left-0 before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-full ${
                  isActive ? "before:w-full font-semibold" : ""
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 before:-bottom-1 before:left-0 before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-full ${
                  isActive ? "before:w-full font-semibold" : ""
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 before:-bottom-1 before:left-0 before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-full ${
                  isActive ? "before:w-full font-semibold" : ""
                }`
              }
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) =>
                `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 before:-bottom-1 before:left-0 before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-full ${
                  isActive ? "before:w-full font-semibold" : ""
                }`
              }
            >
              Cart
            </NavLink>
          </li>
        </ul>

        <div className="cart px-4">
          <i className="fa-solid fa-cart-arrow-down text-white text-xl"></i>
        </div> */}

        <ul className="flex space-x-4 items-center">
          <li>
            <button
              onClick={toggleDarkMode}
              className="bg-gray-700 dark:bg-gray-200 text-white dark:text-gray-800 px-3 py-1 rounded"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? (
                <i className="fa-solid fa-sun text-yellow-500"></i> 
              ) : (
                <i className="fa-solid fa-moon text-white"></i> 
              )}
            </button>
          </li>
          {/* <li>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 before:-bottom-1 before:left-0 before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-full ${
                  isActive ? "before:w-full font-semibold" : ""
                }`
              }
            >
              Login
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/register"
              className={({ isActive }) =>
                `relative before:absolute before:w-0 before:h-0.5 before:bg-primary-800 before:-bottom-1 before:left-0 before:transition-[width] before:duration-300 before:ease-in-out hover:before:w-full ${
                  isActive ? "before:w-full font-semibold" : ""
                }`
              }
            >
              Logout
            </NavLink>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired,
};
