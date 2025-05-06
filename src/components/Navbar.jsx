import React from "react";

const Navbar = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="navbar">
      <div className="logo">Sankeerthana</div>
      <div className="nav-links">
        {["home", "about", "projects", "experience", "skills", "contact"].map((section) => (
          <button key={section} onClick={() => scrollToSection(section)}>
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
