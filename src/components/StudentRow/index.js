import React from "react";
import "./style.css";

class StudentRow extends React.Component {
 

onClick = (eve) =>{
  const { deleteByIndex } = this.props;
  eve.preventDefault();
  deleteByIndex(this.props.index)

}
  render() {
    return (
      <tr>
        <td> {this.props.nome} </td>
        <td>
          <button className="btn-remove" onClick={this.onClick}>×</button>
        </td>
      </tr>
    );
  }
}

export default StudentRow;
