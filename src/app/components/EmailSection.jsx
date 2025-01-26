"use client";

import React, { useState } from "react";
import emailjs from "emailjs-com";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import Swal from "sweetalert2"; // Import SweetAlert2

const EmailSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
        e.target, // Form data
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key
        

        
      )
      
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);

          // Display success alert using SweetAlert2
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your email has been sent successfully. We'll get back to you shortly.",
            confirmButtonColor: "#3085d6",
          });
        },
        (error) => {
          console.error("Error sending email:", error.text);

          // Display error alert using SweetAlert2
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Something went wrong while sending your email. Please try again later.",
            confirmButtonColor: "#d33",
          });
        }
      );

    e.target.reset(); // Reset the form after submission
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Let&apos;s Connect
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          At Revamb Services, we&apos;re always open to new opportunities and
          collaborations. Whether you have a question, feedback, or just want to
          connect, feel free to reach out! We&apos;ll do our best to respond
          promptly.
        </p>
        <div className="socials flex flex-row gap-2">
          <p className="text-[#ADB7BE]">Here is our official Instagram account:</p>
          <Link
            href="https://instagram.com/saad_mts"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white h-6 w-6" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="jacob@google.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <select
              name="subject"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
            >
              <option value="">Choose a service</option>
              <option value="Video Editing Service">Video Editing Service</option>
              <option value="CV Making Service">CV Making Service</option>
              <option value="Reports Writing Service">
                Reports Writing Service
              </option>
              <option value="Logos Design Service">Logos Design Service</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full h-auto p-2.5"
              placeholder="Let's talk about..."
            />
          </div>
          <button
            type="submit"
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
