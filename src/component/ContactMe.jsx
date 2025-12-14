// import React, { useState } from 'react';
// import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

// export default function ContactSection() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Add your form submission logic here
//   };

//   return (
//     <section className="min-h-screen bg-blue-100 px-6 py-14 md:pl-22" style={{ fontFamily: 'Poppins, sans-serif' }}>
//       <div className="max-w-7xl mx-auto">
//         {/* Section Title */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//             Get In Touch
//           </h2>
//           <div className="w-20 h-1 bg-blue-900 mx-auto"></div>
//         </div>

//         {/* Two Column Layout */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">



//  {/* Contact Info Section */}
//           <div className="bg-white p-8 rounded-lg shadow-lg">

//             <div className="text-center mb-8">
//             <h3 className="text- font-semibold text-gray-900 mb-4">
//               Crafting And Designing Your Ideas Into
//               </h3>
//               <h1 className="text-5xl font-bold text-gray-900 mb-4"><span className='text-blue-900'>Realistic</span> Digital Solutions</h1>
//             <p className="text-gray-600 mb-8 leading-relaxed">
//              connect with me via the details below or send me a message using the form.
//             </p>
//             </div>


//             {/* Contact Details */}
//             <div className="space-y-6">
//               {/* Name */}
//               {/* <div className="flex items-start">
//                 <div className="shrink-0">
//                   <FaUser className="text-blue-900 text-xl mt-1" />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-semibold text-gray-700 uppercase">Name</p>
//                   <p className="text-gray-900 font-medium">Abdulkareem Salahudeen .B</p>
//                 </div>
//               </div> */}

//               {/* Location */}
//               <div className="flex items-start">
//                 <div className="shrink-0">
//                   <FaMapMarkerAlt className="text-blue-900 text-xl mt-1" />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-semibold text-gray-700 uppercase">Location</p>
//                   <p className="text-gray-900 font-medium">Lagos, Nigeria</p>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start">
//                 <div className="shrink-0">
//                   <FaPhone className="text-blue-900 text-xl mt-1" />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-semibold text-gray-700 uppercase">Call Me</p>
//                   <p className="text-gray-900 font-medium">+234 814 795 1626</p>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start">
//                 <div className="shrink-0">
//                   <FaEnvelope className="text-blue-900 text-xl mt-1" />
//                 </div>
//                 <div className="ml-4">
//                   <p className="text-sm font-semibold text-gray-700 uppercase">Email Me</p>
//                   <p className="text-gray-900 font-medium">salayohub@gmail.com</p>
//                 </div>
//               </div>
//             </div>
//           </div>
        






//           {/* Contact Form Section */}
//           <div className="bg-white p-8 rounded-lg shadow-lg">
//             <h3 className="text-2xl font-semibold text-gray-900 mb-6">
//               Message Me
//             </h3>
//             <div onSubmit={handleSubmit}>
//               {/* Name and Email Row */}
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
//                 <div>
//                   <input
//                     type="text"
//                     name="name"
//                     placeholder="Name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-2xl  
//             shadow-[3px_3px_0px_0px_#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-900"
//                     required
//                   />
//                 </div>
//                 <div>
//                   <input
//                     type="email"
//                     name="email"
//                     placeholder="Email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     className="w-full px-4 py-3 border border-gray-300 rounded-2xl  
//             shadow-[3px_3px_0px_0px_#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-900"
//                     required
//                   />
//                 </div>
//               </div>

//               {/* Subject */}
//               <div className="mb-4">
//                 <input
//                   type="text"
//                   name="subject"
//                   placeholder="Subject"
//                   value={formData.subject}
//                   onChange={handleChange}
//                   className="w-full px-4 py-3 border border-gray-300 rounded-2xl  
//             shadow-[3px_3px_0px_0px_#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-900"
//                   required
//                 />
//               </div>

//               {/* Message */}
//               <div className="mb-6">
//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   rows="6"
//                   className="w-full px-4 py-3 border border-gray-300 rounded-2xl  
//             shadow-[3px_3px_0px_0px_#1e3a8a] focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
//                   required
//                 ></textarea>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 onClick={handleSubmit}
//                 className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors duration-300"
//               >
//                 Send Message
//               </button>
//             </div>
//           </div>

//          </div>
//       </div>
//     </section>
//   );
// }


// contact style setup 2

import React, { useState } from 'react';
import { FaUser, FaMapMarkerAlt, FaPhone, FaEnvelope,FaWhatsapp  } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import  {Link }  from "react-router-dom"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Replace these with your actual EmailJS credentials
    const SERVICE_ID = 'service_vd6elr8';
    const TEMPLATE_ID = 'template_nn427fm';
    const PUBLIC_KEY = 'pCajkGnRvy8ZuBSbP';

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log('Email sent successfully:', result);
      setSubmitStatus('success');
      
      // Clear form after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);

    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 md:pl-20 lg:px-8 lg:pl-20" style={{ fontFamily: 'Poppins, sans-serif' }}>
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
            
            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
                <p className="font-semibold">✓ Message sent successfully!</p>
                <p className="text-sm">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
                <p className="font-semibold">✗ Oops! Something went wrong.</p>
                <p className="text-sm">Please try again or email me directly at salayohub@gmail.com</p>
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    required
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                    required
                    disabled={isSubmitting}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
                  required
                  disabled={isSubmitting}
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 resize-none"
                  required
                  disabled={isSubmitting}
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold transition-colors duration-300 ${
                  isSubmitting 
                    ? 'opacity-50 cursor-not-allowed' 
                    : 'hover:bg-blue-800'
                }`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

         <div className="bg-white p-8 rounded-lg shadow-lg text-center">
      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
        Contact Me
      </h3>

      <p className="text-gray-600 mb-8 leading-relaxed">
        Scan the QR code or use the links below to get in touch with me.
      </p>

      {/* QR Code */}
      <div className="flex justify-center mb-6">
        <img
          src="/assets/whatAPPQRcode.png"
          alt="WhatsApp QR Code"
          className="w-60 h-60 object-contain rounded-md"
        />
      </div>

      {/* Contact Links */}
      <div className=" flex gap-8 justify-center">
        {/* WhatsApp Link */}
        <Link
          to="https://wa.me/qr/ZFVIUCXFS5V7D1"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-3 text-green-600 font-medium hover:underline"
        >
          <FaWhatsapp className="text-xl" />
          Chat on WhatsApp
        </Link>

        {/* Email Link */}
        <Link
          to="mailto:salayohub@gmail.com"
          className="flex items-center justify-center gap-3 text-blue-900 font-medium hover:underline"
        >
          <FaEnvelope className="text-xl" />
          Send an Email
        </Link>
      </div>
    </div>
        </div>
      </div>
    </div>
  );
}