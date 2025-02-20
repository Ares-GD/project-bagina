import React from 'react';

const Bgimggg = () => {
  return (
    <div 
      className="bgimg" 
      style={{ backgroundImage: "url('images/bg_3.webp')" }} 
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center text-center">
          <div className="col-md-7">
            <h2 className="">Каждый шаг имеет значение</h2>
            <p className="lead mx-auto desc mb-5">
              Начните сегодня и уже завтра вы увидите первые результаты. Готовы к переменам? 
              <a href="#" target="_blank">Начать</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bgimggg;