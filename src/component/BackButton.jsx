import React from "react";
import { Link } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { scrollToTop } from "../utils/scrollToTop";

export default function BackButton() {
  return (
    <Link
      to="/"
      onClick={scrollToTop}
      className="inline-flex items-center gap-2 text-blue-900 font-medium mb-6"
    >
      <FiArrowLeft /> Back to Home
    </Link>
  );
}
