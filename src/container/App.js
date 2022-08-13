import '../styles/App.css';

import ListaDeTareas from '../components/ListaTareas';
import ListaDeInvitados from '../components/ListaInvitados';


function App() {
  return (
    <div className="App">
    
    <ListaDeInvitados/>
    <ListaDeTareas/>

    </div>
  );
}

export default App;
