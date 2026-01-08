"use client";

import { useState, useEffect } from "react";
import {
  FaTiktok,
  FaInstagram,
  FaBars,
  FaTimes,
  FaFacebookF,
  FaEnvelope,
} from "react-icons/fa";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "workouts", label: "Workouts" },
    { id: "coaching", label: "1-on-1 Coaching" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    e.preventDefault();
    setActiveLink(id);

    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        const headerOffset = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-white z-50 transition-shadow duration-300 ${
        scrolled ? "shadow-lg" : "shadow-md"
      }`}
    >
      <nav className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 py-3 flex justify-between items-center">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-10">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleNavClick(e, link.id)}
              className={`relative text-black font-semibold text-sm xl:text-[0.95rem] transition-colors duration-300 hover:text-purple ${
                activeLink === link.id ? "text-purple" : ""
              }`}
            >
              {link.label}
              {activeLink === link.id && (
                <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-purple"></span>
              )}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-2xl text-black hover:text-purple transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Social Media Icons */}
        <div className="flex items-center gap-3 sm:gap-6">
          <div className="bg-purple flex gap-2 sm:gap-3 px-3 sm:px-5 py-2 sm:py-2.5 rounded">
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[1.1rem] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
            >
              <FaTiktok />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[1.1rem] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
            >
              <FaInstagram />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[1.1rem] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
            >
              <FaFacebookF />
            </a>
            <a
              href="mailto:contact@trainwithmike.com"
              className="text-white text-[1.1rem] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white border-t border-gray-200 overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-4 space-y-3">
          {navLinks.map((link, index) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => {
                handleNavClick(e, link.id);
                setMenuOpen(false);
              }}
              className={`block text-black font-semibold text-base py-2 transition-all duration-300 hover:text-purple transform ${
                activeLink === link.id ? "text-purple" : ""
              } ${
                menuOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-4 opacity-0"
              }`}
              style={{
                transitionDelay: menuOpen ? `${index * 50}ms` : "0ms",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
