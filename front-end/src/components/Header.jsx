import React, { useState, useEffect } from 'react';
// Asegúrate de que esta importación apunte correctamente a tu archivo CSS externo
// IMPORTACIÓN DE ÍCONOS DE REACT-ICONS (Rutas más estables)
// Usamos Fa (Font Awesome) para la mayoría de los íconos
import { FaHome, FaUser, FaBriefcase, FaBolt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; 
// Usamos Io (Ionicons) para el manejo de flechas y el tema
import { IoIosArrowForward, IoIosArrowBack, IoIosMoon, IoIosSunny } from 'react-icons/io'; 

// Importaciones de React Router DOM
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "../styles/Header.css" 


// Definición de las rutas principales (Los paths se dejan como están)
const navItems = [
    // Íconos de Font Awesome 
    { name: 'Home', icon: FaHome, path: '/' },
    { name: 'AboutMe', icon: FaUser, path: '/about' },
    { name: 'Abilities', icon: FaBolt, targetId: 'content2', path: '/' },
    { name: 'Projects', icon: FaBriefcase, targetId: 'content3', path: '/' },
];

// Definición del submenú de Contacto
const contactItems = [
    {
        name: "GitHub",
        icon: FaGithub,
        link: "https://github.com/FGramulla",
        iconClass: "github-icon",
    },
    {
        name: "Linkedin",
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/franco-gramulla-bridarolli-802a20243/",
        iconClass: "linkedin-icon",
    },
    {
        name: "Email",
        icon: FaEnvelope, // Usamos FaEnvelope para consistencia
        link: "mailto:fgramulla@gmail.com",
        iconClass: "email-icon",
    },
];

// --- Componente de Botón de Cambio de Tema ---
const ThemeToggle = ({ isExpanded, isDarkMode, toggleTheme }) => {
    // Determina qué icono mostrar basado en el estado del tema
    const ThemeIcon = isDarkMode ? IoIosMoon : IoIosSunny;

    return (
        <li className="theme-toggle-container">
            <button
                onClick={toggleTheme}
                className="theme-toggle-btn"
                aria-label={isDarkMode ? "Cambiar a tema claro" : "Cambiar a tema oscuro"}
            >
                {/* Icono Dinámico (Moon o Sun) */}
                {/* NOTA: El tamaño del ícono se controla por CSS ahora */}
                <ThemeIcon /> 
                <span 
                    className={`nav-item-text ${isExpanded ? 'block-on-expanded' : 'hidden-on-compact'}`}
                >
                    Theme
                </span>
                
                {/* Toggle Deslizante */}
                {isExpanded && (
                    <div className="toggle-switch">
                        <div className={`slider ${isDarkMode ? 'dark' : 'light'}`}></div>
                    </div>
                )}
            </button>
        </li>
    );
};
// ---------------------------------------------


const Header = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    
    // Inicializar el tema leyendo localStorage o el atributo del root
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Uso de una función para inicializar el estado
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme');
            if (storedTheme) {
                return storedTheme === 'dark';
            }
            return document.documentElement.getAttribute('data-theme') === 'dark';
        }
        return false; // Valor por defecto en SSR o si window no está definido
    });
    
    const location = useLocation();
    const navigate = useNavigate();

    // Efecto para aplicar el tema al renderizar y al cambiar isDarkMode
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
        } else {
            document.documentElement.removeAttribute('data-theme');
        }
        // Guardar la preferencia en localStorage
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    // Función para cambiar el tema
    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    // Función para manejar el desplazamiento a una sección
    const handleNavLinkClick = (e, item) => {
        if (!item.targetId || location.pathname !== '/') {
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
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    const sidebarClass = isExpanded ? 'sidebar-expanded' : 'sidebar-compact';
    // Íconos de flecha de Ionicons
    const ExpandIcon = isExpanded ? IoIosArrowBack : IoIosArrowForward;
    const ContactChevron = IoIosArrowForward;

    return (
        <aside className={`sidebar ${sidebarClass}`}>
            <nav className="flex flex-col h-full">
                
                {/* Logo/Botón de Expansión (Siempre visible) */}
                <div className="sidebar-header">
                    {isExpanded && (
                        <span className="sidebar-logo-text">F.G. Portfolio</span>
                    )}
                    <button
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="sidebar-toggle-btn"
                        aria-label={isExpanded ? "Contraer menú" : "Expandir menú"}
                    >
                        {/* NOTA: El tamaño del ícono se controla por CSS ahora */}
                        <ExpandIcon />
                    </button>
                </div>
                
                {/* BOTÓN DE CAMBIO DE TEMA */}
                <ThemeToggle 
                    isExpanded={isExpanded} 
                    isDarkMode={isDarkMode} 
                    toggleTheme={toggleTheme} 
                />

                {/* Lista de Navegación Principal */}
                <ul className="nav-list">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link 
                                onClick={item.targetId ? (e) => handleNavLinkClick(e, item) : undefined}
                                to={item.path}
                                className="nav-item-link"
                            >
                                {/* NOTA: El tamaño del ícono se controla por CSS ahora */}
                                <item.icon /> 
                                <span 
                                    className={`nav-item-text ${isExpanded ? 'block-on-expanded' : 'hidden-on-compact'}`}
                                >
                                    {item.name}
                                </span>
                            </Link>
                        </li>
                    ))}

                    {/* Item Contacto (Desplegable) */}
                    <li>
                        <button
                            onClick={() => setIsContactOpen(!isContactOpen)}
                            className="contact-btn"
                        >
                            <div className="flex items-center">
                                {/* Usamos FaEnvelope como icono principal para Contacto */}
                                {/* NOTA: El tamaño del ícono se controla por CSS ahora */}
                                <FaEnvelope /> 
                                <span 
                                    className={`nav-item-text ${isExpanded ? 'block-on-expanded' : 'hidden-on-compact'}`}
                                >
                                    Contact
                                </span>
                            </div>
                            {isExpanded && (
                                <ContactChevron 
                                    size={16} 
                                    className={`contact-chevron ${isContactOpen ? 'contact-chevron-rotated' : ''}`}
                                />
                            )}
                        </button>
                        
                        {/* Submenú de Contacto */}
                        {isContactOpen && isExpanded && (
                            <ul className="contact-submenu">
                                {contactItems.map((item) => (
                                    <li key={item.name}>
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="submenu-link"
                                        >
                                            {/* Los íconos del submenú se mantienen en 20px por CSS */}
                                            <item.icon size={20} className={item.iconClass} />
                                            <span className="whitespace-nowrap">{item.name}</span>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </li>
                </ul>
                <div className={`sidebar-footer ${isExpanded ? 'block-on-expanded' : 'hidden-on-compact'}`}>
                    <p>Made with ❤️ in React</p>
                </div>
            </nav>
        </aside>
    );
};

export default Header;