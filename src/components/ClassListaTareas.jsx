import { Component } from "react";

export class ClassListaTareas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li id="tarea">{this.props.nombre} traerá {this.props.tarea}</li>
        </ul>
      </div>
    );
  }
}

export default ClassListaTareas;


