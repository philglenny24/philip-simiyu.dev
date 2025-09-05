import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b relative bg-white z-50">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <div className="bg-orangeAccent text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
          M
        </div>
        <span className="text-3xl font-bold font-mogra text-orange-600">
          Philip.Dev
        </span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex space-x-4 text-black text-lg font-semibold">
        {navItems.map(({ label, href }) => (
          <button
            key={label}
            onClick={() => handleNavClick(href)}
            className="px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition duration-300"
          >
            {label}
          </button>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl text-orange-600"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        {isOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Sidebar Menu */}
      {isOpen && (
        <div className="absolute top-16 right-0 w-64 bg-white shadow-lg border-l z-50 p-6 flex flex-col gap-4 text-lg font-semibold text-black">
          {navItems.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => handleNavClick(href)}
              className="text-left px-4 py-2 rounded-full hover:bg-orange-600 hover:text-white transition duration-300"
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
