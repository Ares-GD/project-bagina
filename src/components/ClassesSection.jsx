import React from 'react';

const ClassesSection = () => {
  return (
    <div className="site-section" id="classes-section">
      <div className="container">
        {/* Заголовок секции */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8 section-heading">
            <span className="subheading">Фитнес-классы</span>
            <h2 className="heading mb-3">Классы</h2>
            <p>Разнообразные классы для всех уровней подготовки: от новичков до профессионалов.</p>
          </div>
        </div>

        {/* Список классов */}
        <div className="row">
          <div className="col-lg-6">
            {/* Класс 1 */}
            <div className="class-item d-flex align-items-center">
              <a href="single.html" className="class-item-thumbnail">
                <img src="assets/images/img_1.webp" alt="Image" />
              </a>
              <div className="class-item-text">
                <h2><a href="single.html">Йога для начинающих</a></h2>
                <span>Джастин Дэниел</span>, <span>30 минут</span>
              </div>
            </div>

            {/* Класс 2 */}
            <div className="class-item d-flex align-items-center">
              <a href="single.html" className="class-item-thumbnail">
                <img src="assets/images/img_2.webp" alt="Image" />
              </a>
              <div className="class-item-text">
                <h2><a href="single.html">Силовая тренировка</a></h2>
                <span>Джастин Дэниел</span>, <span>45 минут</span>
              </div>
            </div>

            {/* Класс 3 */}
            <div className="class-item d-flex align-items-center">
              <a href="single.html" className="class-item-thumbnail">
                <img src="assets/images/img_3.webp" alt="Image" />
              </a>
              <div className="class-item-text">
                <h2><a href="single.html">Кардио-тренировка</a></h2>
                <span>Джастин Дэниел</span>, <span>30 минут</span>
              </div>
            </div>

            {/* Класс 4 */}
            <div className="class-item d-flex align-items-center">
              <a href="single.html" className="class-item-thumbnail">
                <img src="assets/images/img_4.webp" alt="Image" />
              </a>
              <div className="class-item-text">
                <h2><a href="single.html">Кроссфит</a></h2>
                <span>Джастин Дэниел</span>, <span>30 минут</span>
              </div>
            </div>

            {/* Класс 5 */}
            <div className="class-item d-flex align-items-center">
              <a href="single.html" className="class-item-thumbnail">
                <img src="assets/images/img_1.webp" alt="Image" />
              </a>
              <div className="class-item-text">
                <h2><a href="single.html">Пилатес</a></h2>
                <span>Джастин Дэниел</span>, <span>30 минут</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesSection;