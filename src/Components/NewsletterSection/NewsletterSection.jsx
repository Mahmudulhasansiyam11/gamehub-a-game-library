import React, { useState } from 'react';
import { toast } from 'react-toastify';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    // console.log('Subscribed with email:', email);
    toast(`Subscribed with email: ${email}`);
    
  };

  return (
    <section className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Stay Updated on the Latest Games</h2>
        <p className="mb-6 text-lg sm:text-xl">Subscribe to our newsletter for game updates, new releases, and exclusive content.</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4 max-w-3xl mx-auto">
          <input
            type="email"
            className="input-bordered bg-white text-black w-full sm:w-80 md:w-96 p-4 rounded-lg "
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="btn border-0 bg-[linear-gradient(to_right,#00F260,#0575E6)] text-white tracking-wide transition-transform transform hover:scale-105"
          >
            Subscribe
          </button>
        </form>

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </section>
  );
};

export default NewsletterSection;
