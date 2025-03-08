import { Link, NavLink } from "react-router-dom";
import useAuth from "../../../api/useAuth";
import { Home, Bed, Calendar, LogOut, User, Menu } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";

const NavBar = () => {
  const { user, logOut } = useAuth();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [dropdownOpen]);

  // Toggle dropdown
  const toggleDropdown = useCallback(() => {
    setDropdownOpen((prev) => !prev);
  }, []);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 px-6 md:px-16 ${
        isScrolled ? "bg-white/40 backdrop-blur-md shadow-md" : "bg-white"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold font-serif"
        >
          Luxo<span className="text-rose-500">Stay</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center space-x-8">
          {navOptions.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={label}
              to={path}
              className={({ isActive }) =>
                `flex items-center space-x-2 transition-colors ${
                  isActive ? "text-rose-500 font-medium" : "text-gray-600 hover:text-rose-500"
                }`
              }
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </NavLink>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden p-2 rounded-md hover:bg-gray-100"
        >
          <Menu className="h-6 w-6" />
        </button>

        {/* User Menu */}
        <div className="flex items-center space-x-4">
          {user ? (
            <div className="relative hidden md:block" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="h-10 w-10 rounded-full border overflow-hidden"
              >
                {user.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <span className="text-sm font-bold flex items-center justify-center h-full w-full bg-gray-200">
                    {user.email?.charAt(0).toUpperCase() || "U"}
                  </span>
                )}
              </button>
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded-md p-2">
                  <p className="text-sm text-gray-700 px-2">{user.email}</p>
                  <button
                    onClick={logOut}
                    className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 flex items-center"
                  >
                    <LogOut className="h-4 w-4 mr-2" /> Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-rose-500 text-white rounded-md hover:bg-rose-600 flex items-center"
            >
              <User className="h-4 w-4 mr-2" /> Login
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-40">
          <div className="absolute top-0 right-0 w-64 bg-white shadow-lg p-4">
            <ul className="space-y-4">
              {navOptions.map(({ label, path, icon: Icon }) => (
                <NavLink
                  key={label}
                  to={path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 transition-colors ${
                      isActive ? "text-rose-500 font-medium" : "text-gray-600 hover:text-rose-500"
                    }`
                  }
                >
                  <Icon className="h-5 w-5" />
                  <span>{label}</span>
                </NavLink>
              ))}
            </ul>

            {/* User Profile in Mobile Menu */}
            {user && (
              <div className="mt-4">
                <button
                  onClick={toggleDropdown}
                  className="w-full text-left px-4 py-2 text-gray-700 flex items-center"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="User"
                      className="h-10 w-10 rounded-full object-cover mr-2"
                    />
                  ) : (
                    <span className="text-sm font-bold flex items-center justify-center h-10 w-10 bg-gray-200 rounded-full mr-2">
                      {user.email?.charAt(0).toUpperCase() || "U"}
                    </span>
                  )}
                  {user.email}
                </button>
                {dropdownOpen && (
                  <div className="absolute left-0 mt-2 w-full bg-white shadow-lg rounded-md p-2">
                    <button
                      onClick={logOut}
                      className="w-full text-left px-4 py-2 text-red-500 hover:bg-gray-100 flex items-center"
                    >
                      <LogOut className="h-4 w-4 mr-2" /> Logout
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

// Navigation Items
const navOptions = [
  { label: "Home", path: "/", icon: Home },
  { label: "Rooms", path: "/rooms", icon: Bed },
  { label: "My Bookings", path: "/mybookings", icon: Calendar },
];

export default NavBar;
