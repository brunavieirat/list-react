import React from 'react';
import axios from 'axios';
import StudentForm from '../StudentForm/index.js';
import StudentList from '../StudentList/index.js';
import SideMenu from '../SideMenu/index.js';
import './App.css';

const API = 'https://private-785c05-learnit.apiary-mock.com'

class App extends React.Component {
  state={
    students: [ ]
  }


  listStudents = () => {
    axios.get(`${API}/students`)
    .then(res=>{
      this.setState({
        students: res.data
      })     
    })
    .catch(error =>{
      console.log(error)
    })
    
  }

  componentDidMount(){

    this.listStudents();
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
