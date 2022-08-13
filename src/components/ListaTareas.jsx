import React from "react";
import ClassListaTareas from "./ClassListaTareas";

class ListaDeTareas extends React.Component {
  render() {
    return (
      <div>
         <h3>Tareas:</h3>
        <ul>
          <ClassListaTareas nombre="Nicolas" tarea="papas fritas"/>
          <ClassListaTareas nombre="Ivan" tarea="pizzas"/>
          <ClassListaTareas nombre="Carolina" tarea="bebidas"/>
        </ul>
      </div>
    );
  }
}

export default ListaDeTareas;