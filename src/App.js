import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { NavBar } from './Components/Menu/NavBar';
import { ItemListContainer } from './Components/Container/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetail/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';





function App() {
  return (
    <Router>
      <NavBar/>
      
      <Switch>
          <Route path='/Home' exact component={ItemListContainer}/>
          <Route path='/category/:idCategory' exact component={ItemListContainer}/>
          <Route path='/detalle/:idArticulo' exact component={ItemDetailContainer}/>
      </Switch>

    </Router>
  );
}

export default App;
