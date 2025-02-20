import React from 'react';

const SiteSection = () => {
  return (
    <div className="site-section" id="services-section">
      <div className="container">
        {/* Заголовок секции */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8 section-heading">
            <span className="subheading">Fitness Услуги</span>
            <h2 className="heading mb-3">Услуги</h2>
            <p>Широкий спектр услуг для поддержания вашего здоровья и красоты.</p>
          </div>
        </div>

        {/* Список услуг */}
        <div className="row">
          {/* Услуга 1 */}
          <div className="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="">
            <div className="ftco-feature-1">
              <span className="icon flaticon-fit"></span>
              <div className="ftco-feature-1-text">
                <h2>Будьте в отличной форме</h2>
                <p>Наши программы помогут вам всегда оставаться в тонусе.</p>
              </div>
            </div>
          </div>

          {/* Услуга 2 */}
          <div className="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="ftco-feature-1">
              <span className="icon flaticon-gym-1"></span>
              <div className="ftco-feature-1-text">
                <h2>Присоединяйтесь к нашему фитнес-клубу</h2>
                <p>Станьте частью нашего сообщества и получите доступ к эксклюзивным программам.</p>
              </div>
            </div>
          </div>

          {/* Услуга 3 */}
          <div className="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="ftco-feature-1">
              <span className="icon flaticon-gym"></span>
              <div className="ftco-feature-1-text">
                <h2>Современный спортзал</h2>
                <p>Наш зал оснащен всем необходимым для эффективных тренировок.</p>
              </div>
            </div>
          </div>

          {/* Услуга 4 */}
          <div className="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="">
            <div className="ftco-feature-1">
              <span className="icon flaticon-vegetables"></span>
              <div className="ftco-feature-1-text">
                <h2>Здоровое питание</h2>
                <p>Мы предлагаем консультации по правильному питанию для достижения ваших целей.</p>
              </div>
            </div>
          </div>

          {/* Услуга 5 */}
          <div className="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
            <div className="ftco-feature-1">
              <span className="icon flaticon-fruit-juice"></span>
              <div className="ftco-feature-1-text">
                <h2>Свежевыжатые соки</h2>
                <p>Попробуйте наши свежевыжатые соки, чтобы зарядиться энергией на весь день.</p>
              </div>
            </div>
          </div>

          {/* Услуга 6 */}
          <div className="col-lg-4 mb-4 col-md-6" data-aos="fade-up" data-aos-delay="200">
            <div className="ftco-feature-1">
              <span className="icon flaticon-stationary-bike"></span>
              <div className="ftco-feature-1-text">
                <h2>Эффективная разминка</h2>
                <p>Разминка — важный этап каждой тренировки. Мы научим вас правильно готовить тело к нагрузкам.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiteSection;