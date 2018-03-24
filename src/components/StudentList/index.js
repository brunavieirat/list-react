import React from 'react';
import StudentRow from '../StudentRow';
import './style.css';


class StudentList extends React.Component {



  render() {
    const { students, deleteByIndex } = this.props
    //const students = this.props.students;

    return (
      <div className="card StudentList">
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              </tr>
          </thead>
          <tbody>
            {students.map((student, index)=> (

              <StudentRow
                nome={student.nome}
                key={index}
                index={index}
                deleteByIndex={deleteByIndex}
              />
            ))}
            
          </tbody>
        </table>
      </div>
    );
  }
}

export default StudentList;
