import React from 'react';
import { Link } from 'react-router-dom';

/**
 * BlogCard Component
 * 
 * Reusable card for displaying blog post preview featuring:
 * - Title (23px, 500 weight)
 * - Excerpt text (18px, #9CA3AF)
 * - "Read More →" link to the full post
 * - Publication date
 * - Hover effects for interactivity
 * - Responsive padding and spacing
 * 
 * Props:
 * - id: Blog post unique identifier (used for routing)
 * - title: Blog post title (string)
 * - excerpt: Short excerpt of the blog content (string)
 * - date: Publication date (string)
 */
function BlogCard({ id, title, excerpt, date }) {
  return (
    <article className="py-8 sm:py-10 border-b border-border-dark last:border-b-0 hover:bg-opacity-5 hover:bg-accent-green transition-colors duration-200 px-4 sm:px-6 lg:px-0">
      {/* Blog Title */}
      <h2 className="text-2xl sm:text-3xl font-blog-card-excerpt font-semibold text-text-primary mb-4">
        {title}
      </h2>

      {/* Blog Excerpt */}
      <p className="text-lg sm:text-xl text-text-secondary mb-4 leading-relaxed">
        {excerpt}
      </p>

      {/* Read More Link */}
      <Link
        to={`/blog/${id}`}
        className="inline-block text-accent-green font-semibold hover:opacity-80 transition-opacity mb-4 text-base sm:text-lg"
      >
        Read More →
      </Link>

      {/* Publication Date */}
      <p className="text-sm sm:text-base text-text-secondary">
        {date}
      </p>
    </article>
  );
}

export default BlogCard;
