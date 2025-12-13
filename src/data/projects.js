import { Link } from "react-router-dom";

export const projects = [
  {
    id: "1",
    title: "E-Commerce Website",
    category: "Web Development",
    description:
      "A modern e-commerce store built with React and Tailwind, optimized for SEO and user experience.",
    Technologies: ["React", "TailwindCSS", "Node.js", "Stripe API"],
    process: [
      "Market research and competitor analysis",
      "User-focused UI/UX design",
      "API Integration and checkout logic",
      "Mobile responsiveness & SEO optimization",
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
    title: "E-commerce store Website",
    category: "wordpress Development",
    description:
      "A sleek, modern e-commerce showcasing different products and featured different product categories.",
    tools: ["wordpress", "elementor", "WooCommerce"],
    process: ["wordpress installations", "woocommerce setup", "Accessibility"],
    thumbnail: "/assets/britusstore.png",
    images: ["/images/projects/portfolio-1.jpg"],
     Link: "https://mimistore-beige.vercel.app/",
    date: "2024",
  },

  {
    id: "3",
    title: "listing Web Application",
    category: "AI & Prompt Engineering",
    description:
      "A workflow automation using AI prompts to generate reports, summaries, and responses.",
    tools: ["Python", "OpenAI API", "React"],
    process: [
      "Prompt engineering",
      "API integration",
      "Testing & automation tuning",
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
      "High-converting landing page for a small business, optimized for leads.",
    tools: ["Next.js", "TailwindCSS"],
    process: ["SEO analysis", "Copywriting", "Responsive layout"],
    thumbnail: "/assets/movieapp.png",
    images: ["/images/projects/landing-1.jpg"],
     Link: "https://reels-naija-movie-database.vercel.app/",
    date: "2024",
  },

  {
    id: "5",
    title: "Cloud Architecture Demo",
    category: "Cloud & DevOps",
    description:
      "A cloud deployment environment showing CI/CD, scaling, and best practices.",
    tools: ["AWS", "Docker", "CI/CD"],
    process: [
      "Architectural planning",
      "AWS deployment",
      "Load balancing setup",
    ],
    thumbnail: "/assets/delegateng.png",
    images: ["/images/projects/cloud-1.jpg"],
     Link: "https://tasktrust.vercel.app/",
    date: "2023",
  },
];
