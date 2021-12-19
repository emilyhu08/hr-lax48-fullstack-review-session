import React from "react";
import List from "./List.jsx";
import Add from "./Add.jsx";
import Random from "./Random.jsx";
const axios = require("axios");

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "home",
      studentlist: [],
    };
    this.changepage = this.changepage.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.getStudents = this.getStudents.bind(this);
  }

  componentDidMount() {
    // used to store all students on our front end when the application runs
    this.getStudents();
  }

  getStudents() {
    // Todo: Add your code here to retrieve all students from the database
    axios.get("/students").then(({ data }) => {
      this.setState({
        studentList: data,
      });
    });
  }

  changepage(e) {
    // Todo: Add your logic to "change pages" here on button click
    let { value } = e.target;
    this.setState({
      page: value,
    });
  }

  render() {
    if (this.state.page === "add") {
      return (
        <div>
          <button value="home" onClick={this.changepage}>
            Back
          </button>
          <Add getStudents={this.getStudents} />
        </div>
      );
    } else if (this.state.page === "list") {
      return (
        <div>
          <button value="home" onClick={this.changepage}>
            Back
          </button>
          <List
            studentList={this.state.studentList}
            getStudents={this.getStudents}
          />
        </div>
      );
    } else if (this.state.page === "random") {
      return (
        <div>
          <button value="home" onClick={this.changepage}>
            Back
          </button>
          <Random students={this.state.studentList} />
        </div>
      );
    } else {
      return (
        <div>
          <button value="add" onClick={this.changepage}>
            Add Student
          </button>
          <button value="list" onClick={this.changepage}>
            List Students
          </button>
          <button value="random" onClick={this.changepage}>
            Random Student
          </button>
        </div>
      );
    }
  }
}
