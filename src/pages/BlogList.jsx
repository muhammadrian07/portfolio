import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/blogs';

/**
 * Blog List Page
 * 
 * Displays all blog posts in a card-based layout featuring:
 * - Navigation bar
 * - "Blogs" heading (41px, 800 weight)
 * - List of BlogCard components
 * - Footer
 * 
 * This page allows users to browse all available blog posts
 * and click "Read More" to view individual articles.
 */
function BlogList() {
  return (
    <div className="min-h-screen bg-bg-dark flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Page Heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-hero font-bold text-text-primary mb-12 sm:mb-16">
          Blogs
        </h1>

        {/* Blog Cards List */}
        <div className="divide-y divide-border-dark">
          {blogPosts.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
            />
          ))}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BlogList;
