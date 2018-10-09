import React from "react";
import CheckBoxesToShow from "./checkBoxesToShow";
import {Button, ButtonGroup} from "reactstrap";

class Buttons extends React.Component {
  render() {
    return (
      <button className={`${this.props.class} btn button-currency`} onClick={() => this.props.onCurrencyChange(this.props.currency, this.props.index)}>{this.props.title}</button>
    );
  }
}

class Filters extends React.Component {
  constructor(props) {
    super(props);
    this.state = {tickets: this.props.tickets};
  }

  render() {
    return (
      <div className="block-filter-left">
        <div>
          <p className="title">Валюта</p>
            {this.props.filterButtons.map((item, index) => {
              return (
                {/*<button*/}
                  {/*color="primary"*/}
                  {/*onClick={() => this.props.onCurrencyChange(item.title, index)}*/}
                  {/*key={index}*/}
                  {/*active={this.props.currentCurrency === item.title}*/}
                {/*>*/}
                  {/*{item.title}*/}
                {/*</button>*/}
              {/*);})}*/}
          {/*<ButtonGroup>*/}
            {/*{this.props.filterButtons.map((item, index) => {*/}
              {/*return (*/}
                {/*<Button*/}
                  {/*color="primary"*/}
                  {/*onClick={() => this.props.onCurrencyChange(item.title, index)}*/}
                  {/*key={index}*/}
                  {/*active={this.props.currentCurrency === item.title}*/}
                {/*>*/}
                  {/*{item.title}*/}
                {/*</Button>*/}
              {/*);})}*/}
          {</ButtonGroup>}
        </div>
        <CheckBoxesToShow checkboxes={this.props.checkboxes} isCheckedCheckBoxes={this.props.isCheckedCheckBoxes}/>
      </div>
    );
  }
}

export default Filters;
