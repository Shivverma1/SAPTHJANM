import React, { useState, useEffect, useRef } from 'react';
import logo from './LOGO.png'; // Import the logo image from the components folder
import { UserIcon } from '@heroicons/react/outline'; // Import Heroicons UserIcon

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to control dropdown visibility
  const dropdownRef = useRef(null); // Reference for the dropdown
  const buttonRef = useRef(null); // Reference for the profile button
  const [loggedIn, setLoggedIn] = useState(false); // State to track login status

  // Toggle the dropdown visibility
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if click is outside dropdown and button
      if (
        dropdownRef.current && !dropdownRef.current.contains(event.target) &&
        buttonRef.current && !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false); // Close the dropdown
      }
    };

    // Add event listener
    document.addEventListener('click', handleClickOutside);

    // Cleanup event listener
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Simulate login toggle (Replace with actual login logic)
  const handleLogin = () => setLoggedIn(true); // Simulate login
  const handleLogout = () => setLoggedIn(false); // Simulate logout

  return (
    <header className="bg-white py-3">
      <div className="container mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div>
          <a href="/">
            <img src={logo} alt="App Logo" className="h-20" />
          </a>
        </div>

        {/* Navigation Links and Profile Icon */}
        <div className="flex items-center space-x-6">
          {/* Help Link */}
          <a
            href="/help"
            className="text-gray-700 hover:text-blue-600 transition duration-300"
          >
            Help
          </a>

          {/* Sign In Link */}
          {!loggedIn ? (
            <a
              href="/signin"
              className="text-black py-2 px-4 rounded-md"
              onClick={handleLogin} // Simulate login for demonstration
            >
              Sign In
            </a>
          ) : (
            <>
              {/* Profile Dropdown */}
              <div className="relative">
                <button
                  ref={buttonRef} // Set reference for profile button
                  onClick={toggleDropdown}
                  className="text-gray-700 hover:text-blue-600 transition duration-300 flex items-center"
                >
                  <UserIcon className="h-6 w-6" />
                  Profile
                </button>

                {/* Dropdown Menu */}
                {dropdownOpen && (
                  <div
                    ref={dropdownRef} // Set reference for dropdown menu
                    className="absolute left-0 top-full mt-2 w-48 bg-white border rounded-md shadow-lg z-10"
                  >
                    <ul className="py-2">
                      <li>
                        <a
                          href="/profile"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a
                          href="/settings"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Settings
                        </a>
                      </li>
                      <li>
                        <a
                          href="/help"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                          Help
                        </a>
                      </li>
                      <li>
                        <a
                          href="/logout"
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                          onClick={handleLogout} // Simulate logout for demonstration
                        >
                          Logout
                        </a>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
