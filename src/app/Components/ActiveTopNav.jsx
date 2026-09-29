"use client";

import Link from "next/link";

const ActiveTopNav = ({ children, href, active, className = "" }) => {
  const id = href.replace("#", "");

  return (
    <Link
      href={href}
      className={`${className} transition-colors duration-200 ${
        active === id ? "text-purple-500" : "text-white"
      }`}
    >
      {children}
    </Link>
  );
};

export default ActiveTopNav;