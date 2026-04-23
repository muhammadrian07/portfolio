import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { blogPosts } from '../data/blogs';

/**
 * Blog Post Detail Page
 * 
 * Displays the full content of a single blog post featuring:
 * - Navigation bar
 * - Large title (800 weight)
 * - Full blog content with proper typography
 * - Line height of 32px for readability
 * - Text color #D1D5DB (text-tertiary)
 * - Link back to blog listing
 * - Footer
 * 
 * Uses URL parameter (id) to load the correct post from the data
 */
function BlogPost() {
  const { id } = useParams();
  const post = blogPosts.find((p) => p.id === parseInt(id));

  // Handle post not found
  if (!post) {
    return (
      <div className="min-h-screen bg-bg-dark flex flex-col">
        <Navbar />
        <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-hero font-bold text-text-primary mb-4">Post Not Found</h1>
          <p className="text-text-secondary mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog" className="text-accent-green font-semibold hover:opacity-80 transition-opacity">
            ← Back to Blogs
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-bg-dark flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow max-w-4xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        {/* Back Link */}
        <Link to="/blog" className="text-accent-green font-semibold hover:opacity-80 transition-opacity mb-8 inline-block">
          ← Back to Blogs
        </Link>

        {/* Article Header */}
        <header className="mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-hero font-bold text-text-primary mb-4">
            {post.title}
          </h1>
          <p className="text-text-secondary text-base sm:text-lg">
            Published on {post.date}
          </p>
        </header>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none">
          <div className="text-text-tertiary text-lg leading-blog-content space-y-6 sm:space-y-8">
            {/* Parse and display markdown content */}
            {post.content.split('\n\n').map((paragraph, index) => {
              const trimmed = paragraph.trim();
              
              // Handle headings
              if (trimmed.startsWith('###')) {
                return (
                  <h3
                    key={index}
                    className="text-2xl sm:text-3xl font-hero font-bold text-text-primary mt-8 mb-4"
                  >
                    {trimmed.replace(/^###\s*/, '')}
                  </h3>
                );
              }
              if (trimmed.startsWith('##')) {
                return (
                  <h2
                    key={index}
                    className="text-3xl sm:text-4xl font-hero font-bold text-text-primary mt-10 mb-6"
                  >
                    {trimmed.replace(/^##\s*/, '')}
                  </h2>
                );
              }

              // Handle lists
              if (trimmed.startsWith('-')) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 ml-4">
                    {trimmed.split('\n').map((item, i) => (
                      <li key={i} className="text-text-tertiary">
                        {item.replace(/^-\s*/, '')}
                      </li>
                    ))}
                  </ul>
                );
              }

              // Handle numbered lists
              if (trimmed.match(/^\d+\./)) {
                return (
                  <ol key={index} className="list-decimal list-inside space-y-2 ml-4">
                    {trimmed.split('\n').map((item, i) => (
                      <li key={i} className="text-text-tertiary">
                        {item.replace(/^\d+\.\s*/, '')}
                      </li>
                    ))}
                  </ol>
                );
              }

              // Regular paragraphs
              if (trimmed) {
                return (
                  <p key={index} className="text-text-tertiary leading-blog-content">
                    {trimmed}
                  </p>
                );
              }

              return null;
            })}
          </div>
        </article>

        {/* Back to Blogs Link */}
        <div className="mt-12 sm:mt-16 pt-8 sm:pt-10 border-t border-border-dark">
          <Link
            to="/blog"
            className="text-accent-green font-semibold hover:opacity-80 transition-opacity inline-block"
          >
            ← Back to Blogs
          </Link>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default BlogPost;
