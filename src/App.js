import { NavBar } from './Components/Menu/NavBar';
import { ItemListContainer } from './Components/Container/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <div>
         <NavBar/>
         <ItemListContainer/>
    </div>
    </>
  );
}

export default App;
