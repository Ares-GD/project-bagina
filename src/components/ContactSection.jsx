import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    lastName: '',
    firstName: '',
    subject: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Отправленные данные:', formData);
    // Здесь можно добавить логику отправки данных на сервер
  };

  return (
    <div className="site-section bg-light contact-wrap" id="contact-section">
      <div className="container">
        {/* Заголовок секции */}
        <div className="row justify-content-center text-center mb-5">
          <div className="col-md-8 section-heading">
            <span className="subheading">Связаться с нами</span>
            <h2 className="heading mb-3">Свяжитесь с нами</h2>
            <p>Хотите узнать больше? Свяжитесь с нами любым удобным способом.</p>
          </div>
        </div>

        {/* Форма обратной связи */}
        <div className="row justify-content-center">
          <div className="col-md-7">
            <form onSubmit={handleSubmit}>
              {/* Поля для Фамилии и Имени */}
              <div className="form-group row">
                <div className="col-md-6 mb-3 mb-lg-0">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Фамилия" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </div>
                <div className="col-md-6">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Имя" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Поле для темы сообщения */}
              <div className="form-group row">
                <div className="col-md-12">
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="Тема" 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Поле для email */}
              <div className="form-group row">
                <div className="col-md-12">
                  <input 
                    type="email" 
                    className="form-control" 
                    placeholder="Почта" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Поле для текста сообщения */}
              <div className="form-group row">
                <div className="col-md-12">
                  <textarea 
                    className="form-control" 
                    cols="30" 
                    rows="10"
                    placeholder="Напишите обращение здесь"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
              </div>

              {/* Кнопка отправки формы */}
              <div className="form-group row">
                <div className="col-md-6">
                  <input 
                    type="submit" 
                    className="btn btn-primary py-3 px-5 btn-block" 
                    value="Отправить" 
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;