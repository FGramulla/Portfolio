import React, { useState, useEffect } from "react";
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaBolt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosMoon,
  IoIosSunny,
  IoIosArrowDown,
} from "react-icons/io";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../styles/Header.css";

const navItems = [
  { name: "Home", icon: FaHome, path: "/" },
  { name: "AboutMe", icon: FaUser, path: "/about" },
  { name: "Abilities", icon: FaBolt, targetId: "content2", path: "/" },
  { name: "Projects", icon: FaBriefcase, targetId: "content3", path: "/" },
];

const contactItems = [
  {
    name: "My GitHub",
    icon: FaGithub,
    link: "https://github.com/FGramulla",
    iconClass: "github-icon",
  },
  {
    name: "My Linkedin",
    icon: FaLinkedin,
    link: "https://www.linkedin.com/in/franco-gramulla-bridarolli-802a20243/",
    iconClass: "linkedin-icon",
  },
  {
    name: "My Email",
    icon: FaEnvelope,
    link: "mailto:fgramulla@gmail.com",
    iconClass: "email-icon",
  },
];

const ThemeToggle = ({ isExpanded, isDarkMode, toggleTheme }) => {
  const ThemeIcon = isDarkMode ? IoIosMoon : IoIosSunny;
  const themeName = isDarkMode ? "Dark Mode" : "Light Mode";

  return (
    <li className="theme-toggle-container">
      <button
        onClick={toggleTheme}
        className="theme-toggle-btn"
        aria-label={`Cambiar a ${themeName}`}
        // 🌟 Tooltip para el modo compacto
        title={!isExpanded ? `Toggle Theme (${themeName})` : undefined}
      >
        <ThemeIcon />
        <span
          className={`nav-item-text ${
            isExpanded ? "block-on-expanded" : "hidden-on-compact"
          }`}
        >
          Theme
        </span>

        {isExpanded && (
          <div className="toggle-switch">
            <div className={`slider ${isDarkMode ? "dark" : "light"}`}></div>
          </div>
        )}
      </button>
    </li>
  );
};

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const storedTheme = localStorage.getItem("theme");
      if (storedTheme) {
        return storedTheme === "dark";
      }
      return document.documentElement.getAttribute("data-theme") === "dark";
    }
    return false;
  });

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const handleNavLinkClick = (e, item) => {
    // Si estamos en modo compacto y es el enlace de inicio (o cualquier enlace), cerramos el submenú de contacto.
    if (!isExpanded && isContactOpen) {
        setIsContactOpen(false);
    }
    
    if (!item.targetId || location.pathname !== "/") {
      navigate(item.path);
      return;
    }

    e.preventDefault();

    if (location.pathname !== item.path) {
      navigate(item.path);
    }

    const element = document.getElementById(item.targetId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Función para manejar el clic en el botón de contacto
  const handleContactClick = () => {
    // Solo permitimos el toggle si está expandido
    if (isExpanded) {
        setIsContactOpen(!isContactOpen);
    } 
    // Si está compacto, simplemente abrimos/cerramos el modal flotante
    else {
        setIsContactOpen(!isContactOpen);
    }
  };

  const sidebarClass = isExpanded ? "sidebar-expanded" : "sidebar-compact";
  const ExpandIcon = isExpanded ? IoIosArrowBack : IoIosArrowForward;
  const ContactIcon = isContactOpen ? IoIosArrowDown : IoIosArrowForward;

  return (
    <aside className={`sidebar ${sidebarClass}`}>
      <nav className="flex flex-col h-full">
        <div className="sidebar-header">
          {isExpanded && (
            <span className="sidebar-logo-text">F.G. Portfolio</span>
          )}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="sidebar-toggle-btn"
            aria-label={isExpanded ? "Collapse menu" : "Expand menu"}
            title={!isExpanded ? "Expand menu" : undefined}
          >
            <ExpandIcon />
          </button>
        </div>

        <ThemeToggle
          isExpanded={isExpanded}
          isDarkMode={isDarkMode}
          toggleTheme={toggleTheme}
        />

        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                onClick={
                  item.targetId ? (e) => handleNavLinkClick(e, item) : undefined
                }
                to={item.path}
                className="nav-item-link"
                // 🌟 Tooltip para el modo compacto
                title={!isExpanded ? item.name : undefined}
              >
                <item.icon />
                <span
                  className={`nav-item-text ${
                    isExpanded ? "block-on-expanded" : "hidden-on-compact"
                  }`}
                >
                  {item.name}
                </span>
              </Link>
            </li>
          ))}

          <li>
            <button
              onClick={handleContactClick}
              className="contact-btn"
              // 🌟 Tooltip para el botón de Contacto en modo compacto
              title={!isExpanded ? "Contactos" : undefined}
            >
              <FaEnvelope />
              <span
                className={`nav-item-text ${
                  isExpanded ? "block-on-expanded" : "hidden-on-compact"
                }`}
              >
                Contact
              </span>

              {isExpanded && (
                <ContactIcon size={16} className="contact-chevron" />
              )}
            </button>

            {isContactOpen && (
              <ul
                className={`contact-submenu ${
                  !isExpanded ? "submenu-compact" : ""
                }`}
              >
                {contactItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="submenu-link"
                      // 🌟 Tooltip para los enlaces de submenú en modo compacto/modal
                      title={!isExpanded ? item.name : undefined}
                    >
                      <item.icon size={20} className={item.iconClass} />
                      {isExpanded && (
                        <span className="whitespace-nowrap">{item.name}</span>
                      )}
                      {!isExpanded && (
                        <span className="sr-only">{item.name}</span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        </ul>
        {/* El footer ya tiene clases de visibilidad, no necesita title */}
        <div
          className={`sidebar-footer ${
            isExpanded ? "block-on-expanded" : "hidden-on-compact"
          }`}
        >
          <p>Made with ❤️ in React</p>
        </div>
      </nav>
    </aside>
  );
};

export default Header;
