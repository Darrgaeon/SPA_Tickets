import React from "react";
import { hot } from "react-hot-loader";
import _ from "lodash";
import { Grid, Row, Col } from "react-bootstrap";
import TicketsToShow from "./ticketsToShow";
import Filters from "./filters";
require("./render.sass");


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tickets: [],
      ticketsToShow: [],
      currentCurrency: "RUB",
      currency: "RUB",
      filterCheckboxses: [
        {title: "Все", filterFunction: (item) => item.stops <= 3, isChecked: true},
        {title: "Без пересадок", filterFunction: (item) => item.stops === 0, isChecked: false},
        {title: "1 пересадка", filterFunction: (item) => item.stops === 1, isChecked: false},
        {title: "2 пересадки", filterFunction: (item) => item.stops === 2, isChecked: false},
        {title: "3 пересадки", filterFunction: (item) => item.stops === 3, isChecked: false}
      ],


      filterButtons: [
        {title: "RUB", currency: 1},
        {title: "USD", currency: 1/60},
        {title: "EUR", currency: 1/70}
      ],
    };

    this.isCheckedCheckBoxes = this.isCheckedCheckBoxes.bind(this);
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/KosyanMedia/test-tasks/master/aviasales/tickets.json")
      .then(response => response.json())
      .then(json => this.setState({
        tickets: json.tickets,
        ticketsToShow: json.tickets,
        ticketsToShow_: json.tickets,
      }));
  }

  isCheckedCheckBoxes(event, index) {
    console.log("click", index);
    let checkBoxses = _.cloneDeep(this.state.filterCheckboxses);
    checkBoxses[index].isChecked = event.target.checked;

    let newData = this.filterTicketsToShow(checkBoxses);

    if (checkBoxses[0].isChecked) {
      for (let i = 1; i < checkBoxses.length; i++) {
        checkBoxses[i].isChecked = false;
      }
      newData = this.state.tickets;
    }

    this.setState({
      ticketsToShow: newData,
      filterCheckboxses: checkBoxses
    });
  }

  filterTicketsToShow(newFilterCheckboxses) {
    let data = this.state.tickets.slice();
    let newData = [];
    let isAnyChecks = false;
    for (let i = 0; i < newFilterCheckboxses.length; i++) {
      if (newFilterCheckboxses[i].isChecked) {
        isAnyChecks = true;
        newData = newData.concat(data.filter(function (item) {
          return newFilterCheckboxses[i].filterFunction(item);
        }));
      }
    }

    return isAnyChecks ? newData : data;
  }

  onCurrencyChange(currency, index) {
    if (this.state.currentCurrency !== currency) {
      let result = _.cloneDeep(this.state.ticketsToShow);

      this.setState({
        ticketsToShow: result,
        currentCurrency: currency,
        currency: this.state.filterButtons[index].title,
      });
    }
  }

  render() {
    return (
      <Grid className="header">
        <Row>
          <Col md={5} lg={3}>
            <Filters
              checkboxes={this.state.filterCheckboxses}
              currentCurrency={this.state.currentCurrency}
              onCurrencyChange={this.onCurrencyChange.bind(this)}
              isCheckedCheckBoxes={this.isCheckedCheckBoxes.bind(this)}
              filterButtons={this.state.filterButtons}
            />
          </Col>
          <Col md={7} lg={9}>
            <TicketsToShow tickets={this.state.ticketsToShow} currency={this.state.currency}/>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default hot(module)(App);
