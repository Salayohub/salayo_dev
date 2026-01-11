import { Link } from "react-router-dom";

export const projects = [
  {
    id: "1",
    title: "MIMISTORE",
    category: "ECOMMERCE WEBSITE",
    description:
      "MimiStore is a modern e-commerce web application focused on performance, scalability, and user experience. Built with React and Tailwind CSS, it delivers a clean, responsive interface optimized for SEO and accessibility. The store supports multiple product categories including electronics, phones, and accessories, with all major sections such as hero banners and promotional content dynamically rendered via APIs. Secure payments are handled through Stripe integration, following industry best practices for data handling, component reusability, and state management.",
    Technologies: ["React", "TailwindCSS", "Node.js", "Stripe API"],
    process: [
       "Project planning and requirement analysis",
  "UI/UX design with responsive layouts",
  "Component-driven development using React",
  "API integration for dynamic content rendering",
  "Payment integration with Stripe API",
  "Performance optimization and SEO best practices",
  "Testing, refinement, and deployment"
    ],
    thumbnail: "/assets/mimistore1.png",
    images: [
      "/images/projects/ecommerce-1.jpg",
      "/images/projects/ecommerce-2.jpg",
      "/images/projects/ecommerce-3.jpg",
    ],
    Link: "https://mimistore-beige.vercel.app/",
    date: "2024",
  },

  {
    id: "2",
    title: "Britus Store",
    category: "wordpress Development",
    description:
      "Britus Store is a full-featured e-commerce platform built with WordPress and WooCommerce, designed for flexibility, scalability, and performance. The storefront is developed using Elementor to deliver a sleek, responsive UI with reusable design components. Product data, categories, and featured collections are dynamically managed through WooCommerce, enabling efficient inventory and content control. The project follows best practices in theme customization, plugin optimization, SEO configuration, and performance tuning to ensure fast load times, maintainability, and a seamless shopping experience across devices.",

    tools: ["wordpress", "elementor", "WooCommerce"],
    process: [
       "Requirement analysis and store architecture planning",
  "Theme customization and UI composition with Elementor",
  "WooCommerce product and category configuration",
  "Performance and SEO optimization",
  "Cross-device testing and deployment"],

    thumbnail: "/assets/britusstore.png",
    images: ["/images/projects/portfolio-1.jpg"],
     Link: "https://mimistore-beige.vercel.app/",
    date: "2024",
  },

  {
    id: "3",
    title: "StayFinder Listing web App",
    category: "frontend Development",
    description:
      "StayFinder is a modern home listing web application built with Next.js, TypeScript, and Tailwind CSS, focusing on performance, scalability, and type safety. The platform leverages APIs for dynamic rendering of property listings, images, and metadata. It includes automated calculations for pricing, stay duration, and booking totals, ensuring accurate, real-time updates based on user input. The project follows best practices in component architecture, API routing, client–server separation, and responsive design to deliver a fast, intuitive browsing and booking experience.",
    tools: ["Next.js", "TypeScript", "TailwindCSS,"],
    process: [
      "Requirement analysis and feature planning",
  "Application architecture with Next.js and TypeScript",
  "API integration for dynamic property listings",
  "Automated pricing and date-based calculations",
  "Responsive UI development with Tailwind CSS",
  "Testing, optimization, and deployment"
    ],
    thumbnail: "/assets/listingapp.png",
    images: ["/images/projects/ai-1.jpg", "/images/projects/ai-2.jpg"],
     Link: "https://stayfinder-listening.vercel.app/",
    date: "2023",
  },

  {
    id: "4",
    title: "Business Landing Page",
    category: "Marketing Website",
    description:
      "This movie recommendation web application features a high-converting, performance-focused landing page designed to drive user engagement and lead conversion. Built with React.js, JavaScript, and Tailwind CSS, the interface emphasizes clean component structure, responsive layouts, and fast rendering. The application showcases recommended movie content through structured UI sections, optimized call-to-action placement, and accessibility-friendly styling. Best practices in reusable component design, state handling, and frontend optimization are applied to ensure scalability, maintainability, and an intuitive user experience across all devices.",
    tools: ["rect.j", "TailwindCSS , javascript"],
    process: ["Project scope definition and landing page planning",
  "UI layout and conversion-focused design",
  "Component-based development with React",
  "Responsive styling using Tailwind CSS",
  "Performance optimization and accessibility checks",
  "Testing and final deployment"],
    thumbnail: "/assets/movieapp.png",
    images: ["/images/projects/landing-1.jpg"],
     Link: "https://reels-naija-movie-database.vercel.app/",
    date: "2024",
  },

  {
    id: "5",
    title: "Delegate.Ng",
    category: "frontend Development",
    description:
      "This business website was developed to help Nigerians and individuals in the diaspora remotely manage and take care of their products and assets back home. The platform focuses on clarity, trust, and accessibility, providing visitors with a structured overview of services, processes, and contact channels. Built with a modern frontend stack, the site emphasizes responsive design, performance optimization, and clear call-to-action flows. Best practices in layout structure, usability, and content organization were implemented to ensure a reliable and user-friendly experience across devices.",
    tools: ["react.js", "javascript,", "tailwindCSSw"],
    process: [
       "Business requirement analysis and service definition",
  "Information architecture and UX planning",
  "Responsive UI development",
  "Content structuring and call-to-action optimization",
  "Performance and accessibility optimization",
  "Testing and deployment"

    ],
    thumbnail: "/assets/delegateng.png",
    images: ["/images/projects/cloud-1.jpg"],
     Link: "https://tasktrust.vercel.app/",
    date: "2023",
  },

 {
  id: "6",
  title: "Afri-Hope Foundation",
  category: "NGO Website",
  description:
    "AfriHope is a modern, production-ready NGO website built to represent international development work across Africa. The project focuses on creating a trustworthy, emotionally engaging, and performance-optimized digital presence for a non-profit organization.The website showcases real impact through data-driven storytelling, success stories, and transparent reporting while guiding users toward meaningful actions such as donating, volunteering, and partnering. Built with Next.js, TypeScript, and Tailwind CSS, the project demonstrates strong frontend architecture, accessibility best practices, and optimization for regions with slower internet connections.Special emphasis was placed on scalability, performance, and user trust, making the platform suitable for real-world NGO deployment. AfriHope reflects a balance between clean design, emotional storytelling, and conversion-focused user experience.",
  tools: ["Next.js", "TypeScript", "Tailwind CSS", "React.js"],
  process: [
    "Planning & Research: Analyzed leading NGO websites, defined brand identity, mission, and target audience, and designed scalable project architecture.",
    "UI/UX Design: Created a clear, engaging, and mobile-first interface with visual hierarchy and storytelling focus.",
    "Component-Based Development: Built reusable UI components (Buttons, Cards, Forms) to ensure consistency across pages.",
    "Responsive Styling: Implemented Tailwind CSS for adaptive layouts across devices.",
    "SEO & Performance Optimization: Configured semantic HTML, metadata, static generation, and optimized images for fast load times.",
    "Testing & Deployment: Cross-browser testing, accessibility checks, and production-ready deployment."
  ],
    thumbnail: "/assets/portfolio.png",
    images: ["/images/projects/portfolio-1.jpg", "/images/projects/portfolio-2.jpg"],
     Link: "https://your-portfolio-url.com",
    date: "2026",
  }
];
