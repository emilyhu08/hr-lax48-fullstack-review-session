import React from "react";
const axios = require("axios");

export default class ListElement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: "",
      changeName: false,
    };

    this.handleInput = this.handleInput.bind(this);
    this.toggleChangeName = this.toggleChangeName.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
  }

  toggleChangeName(e) {
    this.setState({
      changeName: !this.state.changeName,
    });
  }

  handleInput(e) {
    this.setState({
      inputName: e.target.value,
    });
  }

  handleUpdate(e) {
    axios
      .put(`/students/${this.props.student._id}`, {
        name: this.state.inputName,
      })
      .then(() => this.toggleChangeName())
      .then(() => {
        this.props.getStudents();
      });
  }

  handleChangeName() {
    if (this.state.changeName) {
      return (
        <div>
          <input
            value={this.state.inputName}
            onChange={this.handleInput}
          ></input>
          <span>
            <button onClick={this.toggleChangeName}>Cancel</button>
            <button onClick={this.handleUpdate}>Update</button>
          </span>
        </div>
      );
    }
  }

  render() {
    return (
      <span>
        <div onClick={this.toggleChangeName}>{this.props.student.name}</div>
        {this.handleChangeName()}
        <img src={this.props.student.imageUrl}></img>
      </span>
    );
  }
}
