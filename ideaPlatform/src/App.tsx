import "./App.css";
import turkishIcon from "./assets/Turkish_Airlines_logo_2019.png";

function App() {
  return (
    <>
      <h1 className="logo"></h1>
      <div className="container">
        <div className="nav">
          <div className="nav_title">Валюта</div>
          <div className="nav_btns">
            <button className="nav_btn">RUB</button>
            <button className="nav_btn">USD</button>
            <button className="nav_btn">EUR</button>
          </div>
          <div className="nav_description">Количество пересадок</div>
          <div className="nav_category_btns">
            <label className="nav_category_btn">
              <input type="checkbox" className="checkbox" />
              <span className="custom_checkbox" />
              <div className="nav_category_text">Без пересадок</div>
            </label>
            <label className="nav_category_btn">
              <input type="checkbox" className="checkbox" />
              <span className="custom_checkbox" />
              <div className="nav_category_text">1 пересадка</div>
            </label>
            <label className="nav_category_btn">
              <input type="checkbox" className="checkbox" />
              <span className="custom_checkbox" />
              <div className="nav_category_text">2 пересадки</div>
            </label>
            <label className="nav_category_btn">
              <input type="checkbox" className="checkbox" />
              <span className="custom_checkbox" />
              <div className="nav_category_text">3 пересадки</div>
            </label>
          </div>
        </div>
        <div className="ticket_list">
          <div className="ticket">
            <div className="ticket_info">
              <div>
                <img src={turkishIcon} alt="" />
              </div>
              <button className="ticket_btn">
                Купить <br /> за цена
              </button>
            </div>
            <hr className="ticket_line" />
            <div className="ticket_travel">
              <div className="ticket_departure">
                <div className="time">10:00</div>
                <div className="airport">VVO, Владивосток</div>
                <div>9 окт 2018, пт</div>
              </div>
              <div className="arrow">
                <p>1 пересадка</p>
              </div>
              <div className="departure">
                <div className="time">12:00</div>
                <div className="airport">MOW, Москва</div>
                <div>9 окт 2018, пт</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
