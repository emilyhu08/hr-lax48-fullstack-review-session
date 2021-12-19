import React from "react";

/*
  This component does not necessarily have to be a class component.
  There are multiple ways to implement this feature.
  How would you implement this as a functional component?
*/
export default class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomStudent: {},
    };
    this.getRandomStudent = this.getRandomStudent.bind(this);
  }
  componentDidMount() {
    this.getRandomStudent();
  }

  getRandomStudent() {
    // this gives us a random index value
    var ind = Math.floor(Math.random() * this.props.students.length);
    // Todo: Add your logic here to grab one random student
    let randomStudent = this.props.students[ind];
    this.setState({
      randomStudent: randomStudent,
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.getRandomStudent}>Randomize</button>
        <div>
          <img src={this.state.randomStudent.imageUrl}></img>
          <h1>{this.state.randomStudent.name}</h1>
        </div>
      </div>
    );
  }
}
