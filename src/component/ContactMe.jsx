import React, { useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 md:pl-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">
              Message Me
            </h3>
            <div onSubmit={handleSubmit}>
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl  
            shadow-[3px_3px_0px_0px_#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-900"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-2xl  
            shadow-[3px_3px_0px_0px_#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-900"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div className="mb-4">
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl  
            shadow-[3px_3px_0px_0px_#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-2xl  
            shadow-[3px_3px_0px_0px_#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
          </div>

          {/* Contact Info Section */}
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Contact Info
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Always available for freelance work if the right project comes along. Feel free to contact me!
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Name */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <FaUser className="text-blue-900 text-xl mt-1" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-700 uppercase">Name</p>
                  <p className="text-gray-900 font-medium">Abdulkareem Salahudeen .B</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <FaMapMarkerAlt className="text-blue-900 text-xl mt-1" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-700 uppercase">Location</p>
                  <p className="text-gray-900 font-medium">Lagos, Nigeria</p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <FaPhone className="text-blue-900 text-xl mt-1" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-700 uppercase">Call Me</p>
                  <p className="text-gray-900 font-medium">+234 814 795 1626</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="shrink-0">
                  <FaEnvelope className="text-blue-900 text-xl mt-1" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-semibold text-gray-700 uppercase">Email Me</p>
                  <p className="text-gray-900 font-medium">salayohub@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}