import React from "react";

class Checkbox extends React.Component {
  render() {
    return (
      <div>
        <label className="checkbox">
          <input type="checkbox" checked={this.props.isChecked} onChange={(event) => this.props.isCheckedCheckBoxes(event, this.props.checkboxIndex)}/>
          <span className="checkbox__text">{this.props.title}</span>
        </label>
      </div>
    );
  }
}

class CheckBoxesToShow extends React.Component {
  render() {
    return (
      <div className="container-checkboxes-filters">
        <p className="title">Количество пересадок</p>
        {this.props.checkboxes.map((item, index) => (
          <Checkbox title={item.title} isChecked={item.isChecked} key={index} checkboxIndex={index} checkboxes={this.props.checkboxes} isCheckedCheckBoxes={this.props.isCheckedCheckBoxes}/>
        ))}
      </div>
    );
  }
}

export default CheckBoxesToShow;