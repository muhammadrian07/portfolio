import React from 'react';

/**
 * Hero Component
 * 
 * Main hero section featuring:
 * - Large title "Muhammad Rian" (68px, 800 weight)
 * - Status badge "Available for Work" as clickable button with green dot
 * - Description paragraph with green highlight on key text
 * - Professional social media icons (GitHub, LinkedIn, Email)
 * - 1px border separator below
 * - Responsive layout that stacks on mobile
 */
function Hero() {
  return (
    <section className="bg-bg-dark text-text-primary py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status Badge - Now a link button */}
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          <a
            href="mailto:rayankhan989ad@gmail.com"
            className="flex items-center space-x-2 bg-opacity-10 bg-accent-green hover:bg-opacity-20 px-4 py-2 rounded-full transition-all duration-200 cursor-pointer hover:scale-105"
            title="Click to send an email"
          >
            {/* Green dot - increased size */}
            <div className="w-3 h-3 bg-accent-green rounded-full animate-pulse"></div>
            <span className="text-sm sm:text-base font-medium text-accent-green">Available for Work</span>
          </a>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-hero font-bold text-center mb-8 sm:mb-10 tracking-tight">
          Muhammad Rian
        </h1>

        {/* Description */}
        <div className="max-w-3xl mx-auto mb-8 sm:mb-10">
          <p className="text-center text-base sm:text-lg lg:text-xl text-text-primary mb-4">
            Hi there 👋. I'm Rian, an{' '}
            <span className="bg-accent-green text-bg-dark px-2 py-1 rounded font-semibold">
              AI Engineer specializing in chatbots
            </span>
            , voice bots, and AI-powered automation systems. I help turn ideas into smart, production-ready solutions by
            integrating modern AI models with practical and scalable development approaches.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center items-center space-x-6 mb-8 sm:mb-10">
          {/* Email */}
          <a
            href="mailto:rayankhan989ad@gmail.com"
            title="Email"
            className="text-text-secondary hover:text-accent-green transition-colors"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/muhammadrian07"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-text-secondary hover:text-accent-green transition-colors"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rianaideveloper/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-text-secondary hover:text-accent-green transition-colors"
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>

        {/* Separator */}
        <div className="border-t border-border-dark mt-8 sm:mt-10"></div>
      </div>
    </section>
  );
}

export default Hero;
