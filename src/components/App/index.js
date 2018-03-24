import React from 'react';
// import axios from 'axios';
import StudentForm from '../StudentForm/index.js';
import StudentList from '../StudentList/index.js';
import SideMenu from '../SideMenu/index.js';
import './App.css';


class App extends React.Component {
  state={
    students: [
      
       

      
    ]
  }

  addStudent = (student) => {
    const { students } = this.state;
    this.setState ({
      students: students.concat(student)
    })

  }

  deleteByIndex = (index) => {
    const { students } = this.state;
    this.setState({
      students: [...students.slice(0, index), ...students.slice(index+1)]
    })

  }

  render() {
    const {students} =  this.state

    return (
      <div className="App">
        <SideMenu />
        <div className="container">
          <h1>Estudantes</h1>
          <StudentForm addStudent={this.addStudent} />
          <StudentList students={students} deleteByIndex={this.deleteByIndex} />
        </div>
      </div>
    );
  }
}

export default App;
