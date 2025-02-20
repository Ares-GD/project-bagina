import React, { useState } from 'react';

const PreHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`site-mobile-menu site-navbar-target ${isMenuOpen ? 'active' : ''}`}>
      {/* Заголовок мобильного меню */}
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span 
            className="icon-close2 js-menu-toggle" 
            role="button" 
            tabIndex="0" 
            aria-label="Закрыть меню"
            onClick={toggleMenu}
            onKeyDown={(e) => e.key === 'Enter' && toggleMenu()} // Поддержка клавиши Enter
          >
          </span>
        </div>
      </div>

      {/* Тело мобильного меню */}
      <div className="site-mobile-menu-body">
        {/* Здесь можно добавить содержимое меню */}
        <ul>
          <li><a href="#home-section">Главная</a></li>
          <li><a href="#classes-section">Классы</a></li>
          <li><a href="#schedule-section">Расписание</a></li>
          <li><a href="#trainer-section">Тренеры</a></li>
          <li><a href="#services-section">Услуги</a></li>
          <li><a href="#contact-section">Контакты</a></li>
        </ul>
      </div>
    </div>
  );
};

export default PreHeader;