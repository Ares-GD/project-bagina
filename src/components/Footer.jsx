import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="row">
          {/* О нас */}
          <div className="col-md-4">
            <h3 className="text-dark">О нас</h3>
            <p>Stamina — это место, где ваши мечты о здоровье и красоте становятся реальностью.</p>
          </div>

          {/* Полезные ссылки */}
          <div className="col-md-3 ml-auto">
            <h3 className="text-dark">Полезные ссылки</h3>
            <ul className="list-unstyled footer-links">
              <li><a href="#">Главная</a></li>
              <li><a href="#">Классы</a></li>
              <li><a href="#">Расписание</a></li>
              <li><a href="#">Тренеры</a></li>
            </ul>
          </div>

          {/* Подписка на новости */}
          <div className="col-md-4">
            <h3 className="text-dark">Подпишитесь на новости</h3>
            <p>Подпишитесь на нашу рассылку, чтобы быть в курсе последних новостей и акций.</p>
            <form action="#">
              <div className="d-flex mb-5">
                <input 
                  type="text" 
                  className="form-control rounded-0" 
                  placeholder="Email" 
                />
                <input 
                  type="submit" 
                  className="btn btn-primary rounded-0" 
                  value="Subscribe" 
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;