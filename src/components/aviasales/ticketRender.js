import React from "react";
import {Button} from "reactstrap";
var moment = require('moment');

const transfers = {
  0: "без пересадок",
  1: "1 пересадка",
  2: "2 пересадки",
  3: "3 пересадки"
};


class TicketRender extends React.Component {
  render() {
    console.log("Check stops", this.props.item["stops"])
    return (
      <div className="custom-ticket">
        <div className="company">
          <h3>Turkish Airlines</h3>
          <Button color="primary">
            <a href="#" className={"linkPrices"}>
              {`Купить за ${Math.ceil(this.props.item.price * {"RUB": 1, "USD": 1/60, "EUR": 1/70}[this.props.currency])} ${this.props.currency}`}
            </a>
          </Button>
        </div>
        <div className="departure">
          <div className="departure-time">{this.props.item.departure_time}</div>
          <div className="departure-destination">{this.props.item.origin}, {this.props.item.origin_name}</div>
          <div className="departure-date">{moment(this.props.item.departure_date, "DD.MM.YY").locale("ru").format("D MMM YYYY, dd")}</div>
        </div>
        <div className="stops">
          <p>{transfers[this.props.item["stops"]]}</p>
        </div>
        <div className="arrival">
          <div className="arrival-time">{this.props.item.arrival_time}</div>
          <div className="arrival-destination">{this.props.item.destination}, {this.props.item.destination_name}</div>
          <div className="arrival-date">{moment(this.props.item.arrival_date, "DD.MM.YY").locale("ru").format("D MMM YYYY, dd")}</div>
        </div>
      </div>
    );
  }
}


export default TicketRender;
