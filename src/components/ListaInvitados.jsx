import React from "react";
import ClassListaInvitados from "./ClassListaInvitados";



class ListaDeInvitados extends React.Component {
  render() {
    return (
      <div>
         <h3>Invitados:</h3>
        <ul>
          <ClassListaInvitados nombre="Nicolas" estaEnLista/>
          <ClassListaInvitados nombre="Ivan" estaEnLista={false}/>
          <ClassListaInvitados nombre="Carolina" estaEnLista/>

        </ul>
      </div>
    );
  }
}

export default ListaDeInvitados;