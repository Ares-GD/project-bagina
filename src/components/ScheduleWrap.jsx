import React, { useState } from 'react';

const ScheduleWrap = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleStatus = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="schedule-wrap">
      {/* Блок с часами работы */}
      <div className="d-md-flex align-items-center">
        <div className="hours mr-md-4 mb-4 mb-lg-0">
          <strong className="d-block">Часы работы</strong>
          {isOpen ? (
            <>
              Открыты с: 7:30 до &mdash;
              Закрыты с: 21:00
            </>
          ) : (
            <strong>Закрыто на технический перерыв</strong>
          )}
        </div>

        {/* Кнопка "Связаться с нами" */}
        <div className="cta ml-auto">
          <a 
            href="#contact-section" 
            className="smoothscroll d-flex align-items-center btn"
            onClick={(e) => {
              e.preventDefault(); // Предотвращаем стандартное поведение ссылки
              console.log('Кнопка "Связаться с нами" нажата');
              // Здесь можно добавить логику, например, открытие модального окна
            }}
          >
            <span className="mx-auto">
              <span>Связаться с нами</span>
              <span className="arrow icon-keyboard_arrow_right"></span>
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ScheduleWrap;