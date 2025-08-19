import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4" style={{ backgroundColor: '#C3E6C8' }}>
      
      {/* Contact Card */}
      <div className="relative bg-white shadow-xl rounded-xl p-8 w-full max-w-lg animate-float">
        <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
        <p className="text-gray-600 text-center mb-6">
          Have questions? Reach out to us via the form below.
        </p>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Your Name"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <textarea
            name="message"
            id="message"
            rows={5}
            placeholder="Your Message"
            className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
          <button
            type="submit"
            className="bg-green-500 text-white p-3 rounded-lg hover:bg-green-600 transition font-semibold"
          >
            Send Message
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Or contact us at <span className="text-green-500">support@example.com</span>
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="#"
            className="text-gray-500 hover:text-green-600 transform hover:scale-110 transition duration-300 text-2xl"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-green-500 transform hover:scale-110 transition duration-300 text-2xl"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-green-700 transform hover:scale-110 transition duration-300 text-2xl"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>
          <a
            href="#"
            className="text-gray-500 hover:text-green-400 transform hover:scale-110 transition duration-300 text-2xl"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
