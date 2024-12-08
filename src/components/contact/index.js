// src/components/Contact.js
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="p-8 bg-gray-800 text-white text-center">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 rounded"
        ></textarea>
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
