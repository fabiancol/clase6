import { Component } from "react";

export class ClassListaInvitados extends Component {
  render() {
    return (
      <div>
        <ul>
        <li id="invitado">{this.props.nombre} {!this.props.estaEnLista && "no "}esta invitado a la fiesta</li>
        </ul>
      </div>
    );
  }
}

export default ClassListaInvitados;
