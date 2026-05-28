import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 bg-gray-900 text-white w-full h-[170px] overflow-hidden">

      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 px-8 pt-6 pb-6">

        {/* Logo / About */}
        <div>

          <h2 className="text-2xl font-bold text-green-400">
            VolunteerHub
          </h2>

          <p className="text-gray-400 mt-3 text-sm leading-6 max-w-sm">
            Helping communities through blood donation, food drives,
            education programs, and volunteer events.
          </p>

        </div>

        {/* Quick Links */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-green-400">
            Quick Links
          </h3>

          <ul className="grid grid-cols-4 gap-3 text-gray-400 text-sm">

            <li className="hover:text-green-400 transition">
              <Link to="/dashboard">Dashboard</Link>
            </li>

            <li className="hover:text-green-400 transition">
              <Link to="/eventdetails">Event Details</Link>
            </li>

            <li className="hover:text-green-400 transition">
              <Link to="/volunteerdata">Volunteer</Link>
            </li>

            <li className="hover:text-green-400 transition">
              <Link to="/inforaimatching">AI Matching</Link>
            </li>

            <li className="hover:text-green-400 transition">
              <Link to="/reportsvolunteer">Reports</Link>
            </li>

            <li className="hover:text-green-400 transition">
              <Link to="/volunteermessage">Messages</Link>
            </li>

            <li className="hover:text-green-400 transition">
              <Link to="/attendancevolunteer">Attendance</Link>
            </li>

            <li className="hover:text-green-400 transition">
              <Link to="/aisetting">Setting</Link>
            </li>

          </ul>

        </div>

        {/* Social Media */}
        <div>

          <h3 className="text-xl font-semibold mb-4 text-green-400">
            Follow Us
          </h3>

          <div className="flex gap-4 ml-[150px]">

            {/* FACEBOOK */}
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-600 p-3 rounded-full cursor-pointer transition duration-300 hover:scale-110"
            >
              <FaFacebookF size={18} />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-pink-500 p-3 rounded-full cursor-pointer transition duration-300 hover:scale-110"
            >
              <FaInstagram size={18} />
            </a>

            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-blue-500 p-3 rounded-full cursor-pointer transition duration-300 hover:scale-110"
            >
              <FaLinkedinIn size={18} />
            </a>

            {/* GITHUB */}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 hover:bg-white hover:text-black p-3 rounded-full cursor-pointer transition duration-300 hover:scale-110"
            >
              <FaGithub size={18} />
            </a>

          </div>

          {/* Social Text */}
          <p className="text-gray-400 text-sm mt-4">
            Connect with our AI Volunteer Community 🚀
          </p>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        © 2026 VolunteerHub. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footer;