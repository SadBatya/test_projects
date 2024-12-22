import turkishIcon from "../assets/Turkish_Airlines_logo_2019.png";

interface ITicketProps {
  origin: string;
  originName: string;
  destination: string;
  destinationName: string;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  stops: number;
  price: number;
}

export const Ticket = ({
  origin,
  originName,
  destination,
  departureDate,
  departureTime,
  destinationName,
  arrivalDate,
  arrivalTime,
  stops,
  price,
}: ITicketProps) => (
  <div className="ticket">
    <div className="ticket_info">
      <div>
        <img src={turkishIcon} alt="" />
      </div>
      <button className="ticket_btn">
        Купить <br /> за {price}
      </button>
    </div>
    <hr className="ticket_line" />
    <div className="ticket_travel">
      <div className="ticket_departure">
        <div className="time">{departureTime}</div>
        <div className="airport">
          {origin}, {originName}
        </div>
        <div>{departureDate}</div>
      </div>
      <div className="arrow">
        <p>{stops} пересадок</p>
      </div>
      <div className="departure">
        <div className="time">{arrivalTime}</div>
        <div className="airport">
          {destination}, {destinationName}
        </div>
        <div>{arrivalDate}</div>
      </div>
    </div>
  </div>
);
