import React from 'react';

const TrainerSection = () => {
  return (
    <div className="site-section" id="trainer-section">
      <div className="container">
        {/* Заголовок секции */}
        <div className="row justify-content-center text-center mb-5" data-aos="fade-up">
          <div className="col-md-8 section-heading">
            <span className="subheading">Тренеры</span>
            <h2 className="heading mb-3">Наши профессиональные тренеры</h2>
            <p>Команда опытных тренеров, которые знают, как помочь вам достичь ваших целей.</p>
          </div>
        </div>

        {/* Список тренеров */}
        <div className="row">
          {/* Тренер 1 */}
          <div className="col-lg-3 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay="">
            <div className="person">
              <img 
                src="assets/images/person_1.webp" 
                alt="Image" 
                className="img-fluid" 
              />
              <h3>Джастин Дэниел</h3>
              <p className="position">Тренер по силовым тренировкам</p>
              <p>
                Джастин специализируется на силовых тренировках и помогает клиентам нарастить мышцы и улучшить выносливость.
              </p>
            </div>
          </div>

          {/* Тренер 2 */}
          <div className="col-lg-3 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay="100">
            <div className="person">
              <img 
                src="assets/images/person_2.webp" 
                alt="Image" 
                className="img-fluid" 
              />
              <h3>Мэттью Дэвидсон</h3>
              <p className="position">Тренер по йоге и пилатесу</p>
              <p>
                Мэттью помогает своим ученикам обрести гармонию тела и духа через практику йоги и пилатеса.
              </p>
            </div>
          </div>

          {/* Тренер 3 */}
          <div className="col-lg-3 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay="200">
            <div className="person">
              <img 
                src="assets/images/person_3.webp" 
                alt="Image" 
                className="img-fluid" 
              />
              <h3>Малик Агар</h3>
              <p className="position">Тренер по кардиотренировкам</p>
              <p>
                Малик Агар разрабатывает индивидуальные программы кардио для улучшения сердечно-сосудистой системы и снижения веса.
              </p>
            </div>
          </div>

          {/* Тренер 4 */}
          <div className="col-lg-3 mb-4 mb-lg-0 col-md-6 text-center" data-aos="fade-up" data-aos-delay="300">
            <div className="person">
              <img 
                src="assets/images/person_4.webp" 
                alt="Image" 
                className="img-fluid" 
              />
              <h3>Джордж Флойд</h3>
              <p className="position">Тренер по борьбе</p>
              <p>
                Джордж — опытный тренер по борьбе, который обучает технике вольной и греко-римской борьбы. Он помогает развивать силу, гибкость и стратегическое мышление.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerSection;