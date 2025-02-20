import React from 'react';

const IntroSection = () => {
  return (
    <div 
      className="intro-section" 
      id="home-section" 
      style={{ backgroundColor: '#ccc' }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-12 mx-auto text-center" data-aos="fade-up">
            <h1 className="mb-3">Мы верим, что мелочи имеют значение</h1>
            <p className="lead mx-auto desc mb-5">
              В нашем фитнес-центре каждая деталь продумана для вашего комфорта и успеха.
            </p>
            <p className="text-center">
              <a href="#" className="btn btn-outline-white py-3 px-5">
                НАЧАТЬ
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroSection;