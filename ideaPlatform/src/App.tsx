import "./App.css";
import { Ticket } from "./components/Ticket";
import { tickets } from "./data/data";
import { useState } from "react";

function App() {
  const [filters, setFilters] = useState({
    stops: [] as number[],
  });
  console.log(filters);

  const handleStopsFilterChange = (stops: number) => {
    setFilters((prevFilters) => {
      const newStops = prevFilters.stops.includes(stops)
        ? prevFilters.stops.filter((stop) => stop !== stops)
        : [...prevFilters.stops, stops];
      return {
        ...prevFilters,
        stops: newStops,
      };
    });
  };

  const filteredTickets = tickets.filter(
    (ticket) =>
      filters.stops.length === 0 || filters.stops.includes(ticket.stops)
  );

  return (
    <>
      <h1 className="logo"></h1>
      <div className="container">
        <div className="nav">
          <div className="nav_title">Количество пересадок</div>
          <div className="nav_category_btns">
            {[0, 1, 2, 3].map((stops) => (
              <label key={stops} className="nav_category_btn">
                <input
                  type="checkbox"
                  className="checkbox"
                  checked={filters.stops.includes(stops)}
                  onChange={() => handleStopsFilterChange(stops)}
                />
                <span className="custom_checkbox" />
                <div className="nav_category_text">
                  {stops === 0
                    ? "Без пересадок"
                    : stops === 1
                    ? "1 пересадка"
                    : `${stops} пересадки`}
                </div>
              </label>
            ))}
          </div>
          <a className="contact_btn" href="https://t.me/sadbatya">
            Написать мне
          </a>
        </div>
        <div className="ticket_list">
          {filteredTickets.map(
            (
              {
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
              },
              index
            ) => (
              <Ticket
                key={index}
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
