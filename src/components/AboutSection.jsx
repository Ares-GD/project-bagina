import React from 'react';

const AboutSection = () => {
  return (
    <div className="site-section">
      <div className="container">
        {/* Заголовок секции */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8 section-heading">
            <span className="subheading">Оставайтесь в форме</span>
            <h2 className="heading mb-3">Ваш путь к идеальному телу начинается здесь</h2>
            <p>В мире, где здоровье — это роскошь, мы предлагаем вам доступный способ стать лучше.</p>
          </div>
        </div>

        {/* Слайдер */}
        <div className="owl-carousel nonloop-block-14 block-14" data-aos="fade">
          {/* Слайд 1 */}
          <div className="slide">
            <div className="ftco-feature-1">
              <span className="icon flaticon-fit"></span>
              <div className="ftco-feature-1-text">
                <h2>Достигайте своих целей вместе с нами</h2>
                <p>Наши программы помогут вам достичь результатов, о которых вы мечтали. Готовы начать?</p>
              </div>
            </div>
          </div>

          {/* Слайд 2 */}
          <div className="slide">
            <div className="ftco-feature-1">
              <span className="icon flaticon-gym-1"></span>
              <div className="ftco-feature-1-text">
                <h2>Присоединяйтесь к нашему фитнес-клубу</h2>
                <p>Станьте частью нашего сообщества и получите доступ к эксклюзивным программам.</p>
              </div>
            </div>
          </div>

          {/* Слайд 3 */}
          <div className="slide">
            <div className="ftco-feature-1">
              <span className="icon flaticon-gym"></span>
              <div className="ftco-feature-1-text">
                <h2>Современный спортзал</h2>
                <p>Наш зал оснащен всем необходимым для эффективных тренировок.</p>
              </div>
            </div>
          </div>

          {/* Слайд 4 */}
          <div className="slide">
            <div className="ftco-feature-1">
              <span className="icon flaticon-vegetables"></span>
              <div className="ftco-feature-1-text">
                <h2>Здоровое питание</h2>
                <p>Мы предлагаем консультации по правильному питанию для достижения ваших целей.</p>
              </div>
            </div>
          </div>

          {/* Слайд 5 */}
          <div className="slide">
            <div className="ftco-feature-1">
              <span className="icon flaticon-fruit-juice"></span>
              <div className="ftco-feature-1-text">
                <h2>Свежевыжатые соки</h2>
                <p>Попробуйте наши свежевыжатые соки, чтобы зарядиться энергией на весь день.</p>
              </div>
            </div>
          </div>

          {/* Слайд 6 */}
          <div className="slide">
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

export default AboutSection;