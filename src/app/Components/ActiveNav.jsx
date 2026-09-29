'use client'

import { useEffect, useState } from "react";

const ActiveNav = ({ children, href }) => {
  const [active, setActive] = useState(null);
  const id = href.replace("#", "");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
    }, []);

  return (
    <a
      href={href}
      className={`w-16 aspect-square flex flex-col items-center justify-center gap-[2px] border-purple-600/10 ${
        active === id
          ? "text-purple-500 light:text-[#5b24a7] -translate-y-1 bg-purple-600/20 rounded-full transition-all duration-300 border border-purple-600/50 shadow-[0_0_25px_#552d92]"
          : "text-white light:text-[#313a46]"
      }`}
    >
      {children}
    </a>
  );
};

export default ActiveNav;