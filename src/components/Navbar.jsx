import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Navbar Component
 * 
 * Displays the top navigation with logo and menu links.
 * Features:
 * - Logo that links to home (/)
 * - Navigation links for Home and Blog
 * - Active link indicator
 * - 1px dark border separator at bottom
 * - Fully responsive on mobile and desktop
 */
function Navbar() {
  const location = useLocation();

  // Helper function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-bg-dark text-text-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="font-logo text-logo text-text-primary hover:text-accent-green transition-colors"
          >
            Rian
          </Link>

          {/* Navigation Menu */}
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`text-base font-semibold transition-colors ${
                isActive('/') ? 'text-accent-green' : 'text-text-primary hover:text-accent-green'
              }`}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className={`text-base font-semibold transition-colors ${
                isActive('/blog') ? 'text-accent-green' : 'text-text-primary hover:text-accent-green'
              }`}
            >
              Blog
            </Link>
          </div>
        </div>

        {/* Separator line with padding (like Hero section) */}
        <div className="border-b border-border-dark"></div>
      </div>
    </nav>
  );
}

export default Navbar;
