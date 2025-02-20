import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="site-navbar py-4 js-sticky-header site-navbar-target" role="banner">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          {/* Логотип */}
          <div className="site-logo">
            <a href="index.html">Stamina<span>.</span></a>
          </div>

          {/* Навигация */}
          <div className="ml-auto">
            <nav className={`site-navigation position-relative text-right ${isMenuOpen ? 'active' : ''}`} role="navigation">
              <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
                <li>
                  <a href="#home-section" className="nav-link">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="#classes-section" className="nav-link">
                    Классы
                  </a>
                </li>
                <li>
                  <a href="#schedule-section" className="nav-link">
                    Расписание
                  </a>
                </li>
                <li>
                  <a href="#trainer-section" className="nav-link">
                    Тренеры
                  </a>
                </li>
                <li>
                  <a href="#services-section" className="nav-link">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="#contact-section" className="nav-link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>

            {/* Мобильное меню */}
            <a
              href="#"
              className="d-inline-block d-lg-none site-menu-toggle js-menu-toggle float-right"
              onClick={toggleMenu}
            >
              <span className="icon-menu h3"></span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;