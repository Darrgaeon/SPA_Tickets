import React from "react";
import TicketRender from "./ticketRender";

require("bootstrap/dist/css/bootstrap.css");


class TicketsToShow extends React.Component {
  constructor(props) {
    super(props);

    this.createDepartureDate = this.createDepartureDate.bind(this);
    this.createArrivalDate = this.createArrivalDate.bind(this);
  }

  createDepartureDate(itemDate) {
    let stringDateToNumber = itemDate.departure_date.split(".");
    let stringDayToNumber = parseInt(stringDateToNumber[0], 10);
    let stringMonthToNumber = parseInt(stringDateToNumber[1], 10);
    let stringYearToNumber = parseInt(stringDateToNumber[2], 10);
    let Year = 2000 + stringYearToNumber;
    let date = new Date(Year, stringMonthToNumber, stringDayToNumber);

    return date.toUTCString();
  }

  createArrivalDate(itemDate) {
    let stringDateToNumber = itemDate.arrival_date.split(".");
    let stringDayToNumber = parseInt(stringDateToNumber[0], 10);
    let stringMonthToNumber = parseInt(stringDateToNumber[1], 10);
    let stringYearToNumber = parseInt(stringDateToNumber[2], 10);
    let Year = 2000 + stringYearToNumber;
    let date = new Date(Year, stringMonthToNumber, stringDayToNumber);

    return date.toUTCString();
  }

  render() {
    if (this.props.tickets.length > 0) {
      return (
        <div className="custom-tickets-container">
          {this.props.tickets.map((item, index) => (
            <TicketRender
              item={item}
              key={index}
              currency={this.props.currency}
            />)
          )}
        </div>
      );
    } else {
      return <div>Идет загрузка</div>;
    }
  }
}

export default TicketsToShow;
