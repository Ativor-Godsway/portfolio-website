import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="min-h-screen bg-gray-900 text-white flex items-center justify-center px-6 py-20 fixed inset-0 -z-10">
      <div className="max-w-3xl w-full text-center h-[72%]">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
        <p className="text-gray-400 mb-5">
          I’m always open to new opportunities, collaborations, or just a
          friendly chat. Drop me a message and I’ll get back to you!
        </p>

        {/* Contact Form */}
        <form
          className="space-y-4"
          action={"https://getform.io/f/bvrmpyzb"}
          method="POST"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-4 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition"
          >
            Send Message
          </button>
        </form>

        {/* Alternative Contact */}
        <div className="mt-10">
          <p className="text-gray-400">Or reach me directly at:</p>
          <a
            href="mailto:yourname@email.com"
            className="text-indigo-400 hover:underline"
          >
            yourname@email.com
          </a>
          <div className="flex justify-center gap-6 mt-4">
            <a
              href="https://github.com/yourusername"
              target="_blank"
              className="hover:text-indigo-400"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="hover:text-indigo-400"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              className="hover:text-indigo-400"
            >
              Twitter
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
