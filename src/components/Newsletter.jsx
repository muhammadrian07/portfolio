import React, { useState } from 'react';

/**
 * Newsletter Component
 * 
 * Email subscription section featuring:
 * - Descriptive text about newsletter content
 * - Email input field with placeholder
 * - "Subscribe" button integrated into the input field
 * - Form submission is prevented (static form)
 * - Responsive design with proper spacing
 */
function Newsletter() {
  const [email, setEmail] = useState('');

  // Handle form submission (prevents default, no backend integration)
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, this would call an API to subscribe the email
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="bg-bg-dark text-text-primary py-12 sm:py-16 lg:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Heading */}
        <h2 className="text-center text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-text-primary">
          Subscribe for fast updates on AI, LLMs, and smart system development.
        </h2>

        {/* Email Input Form */}
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex bg-opacity-5 bg-text-primary rounded-lg overflow-hidden border border-border-dark">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent text-text-primary placeholder-text-secondary px-4 sm:px-6 py-3 sm:py-4 outline-none"
              required
            />

            {/* Subscribe Button */}
            <button
              type="submit"
              className="bg-accent-green text-bg-dark font-semibold px-6 sm:px-8 py-3 sm:py-4 hover:bg-opacity-90 transition-all duration-200 whitespace-nowrap"
            >
              Subscribe
            </button>
          </div>
        </form>

        {/* Optional: Success Message */}
        {email && (
          <p className="text-center text-text-secondary text-sm mt-3">
            Thank you for your interest! This form is currently for UI demonstration.
          </p>
        )}
      </div>
    </section>
  );
}

export default Newsletter;
