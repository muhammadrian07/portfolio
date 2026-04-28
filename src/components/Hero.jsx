import React from 'react';

/**
 * Hero Component
 * 
 * Main hero section featuring:
 * - Large title "Muhammad Rian" (68px, 800 weight)
 * - Status badge "Available for Work" with green dot
 * - Description paragraph with green highlight on key text
 * - Social media icons (GitHub, LinkedIn, Email)
 * - 1px border separator below
 * - Responsive layout that stacks on mobile
 */
function Hero() {
  return (
    <section className="bg-bg-dark text-text-primary py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Status Badge */}
        <div className="flex items-center justify-center mb-8 sm:mb-10">
          <div className="flex items-center space-x-2 bg-opacity-10 bg-accent-green px-4 py-2 rounded-full">
            <img src="/dot_icon.svg" alt="Available" className="w-2.5 h-2.5" />
            <span className="text-sm sm:text-base font-medium text-accent-green">Available for Work</span>
          </div>
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
            className="hover:opacity-75 transition-opacity"
          >
            <img src="/email-1-svgrepo-com.svg" alt="Email" className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/muhammadrian07"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="hover:opacity-75 transition-opacity"
          >
            <img src="/github-svgrepo-com (2).svg" alt="GitHub" className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/rianaideveloper/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="hover:opacity-75 transition-opacity"
          >
            <img src="/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-6 h-6 sm:w-7 sm:h-7" />
          </a>
        </div>

        {/* Separator */}
        <div className="border-t border-border-dark mt-8 sm:mt-10"></div>
      </div>
    </section>
  );
}

export default Hero;
