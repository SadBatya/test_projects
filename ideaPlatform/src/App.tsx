import "./App.css";
import { Ticket } from "./components/Ticket";
import { tickets } from "./data/data";

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
          {tickets.map(
            ({
              origin,
              origin_name,
              destination,
              destination_name,
              departure_date,
              departure_time,
              arrival_date,
              arrival_time,
              stops,
              price,
            }) => (
              <Ticket
                origin={origin}
                originName={origin_name}
                destination={destination}
                destinationName={destination_name}
                departureDate={departure_date}
                departureTime={departure_time}
                arrivalDate={arrival_date}
                arrivalTime={arrival_time}
                stops={stops}
                price={price}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
