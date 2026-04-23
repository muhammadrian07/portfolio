import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

/**
 * Home Page
 * 
 * Main landing page featuring:
 * - Navigation bar
 * - Hero section with introduction and social links
 * - Newsletter subscription section
 * - Footer with copyright and links
 * 
 * This page welcomes visitors and provides key information about Rian,
 * along with ways to stay connected and subscribe for updates.
 */
function Home() {
  return (
    <div className="min-h-screen bg-bg-dark flex flex-col">
      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* Newsletter Subscription Section */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
