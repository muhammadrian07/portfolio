import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BlogList from './pages/BlogList';
import BlogPost from './pages/BlogPost';

/**
 * App Component
 * 
 * Main application component that sets up React Router for the portfolio site.
 * 
 * Routes:
 * - "/" → Home page with hero section and newsletter
 * - "/blog" → Blog listing page with all posts
 * - "/blog/:id" → Individual blog post detail page
 * 
 * The router enables seamless navigation between pages without full page reloads.
 */
function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Blog Listing Page Route */}
        <Route path="/blog" element={<BlogList />} />

        {/* Individual Blog Post Detail Route */}
        <Route path="/blog/:id" element={<BlogPost />} />

        {/* Fallback route for undefined paths */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;

