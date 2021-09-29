import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { NavBar } from './Components/Menu/NavBar';
import { ItemListContainer } from './Components/Container/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetail/ItemDetailContainer';
import { CartWidget } from './Components/Cart/CartWidget';
import { CartContext } from './Components/Contex/cartContext';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';




function App() {

  return (

<CartContext>

<Router>
      <NavBar/>
      <Switch>
          <Route path='/' exact component={ItemListContainer}/>
          <Route path='/Home' exact component={ItemListContainer}/>
          <Route path='/category/:idCategory' exact component={ItemListContainer}/>
          <Route path='/detalle/:idArticulo' exact component={ItemDetailContainer}/>
          <Route path='/Cart' exact component ={CartWidget}/>
          </Switch>
    </Router>
    
    </CartContext>  
  )
}

export default App;
