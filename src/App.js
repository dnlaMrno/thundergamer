import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { NavBar } from './Components/Menu/NavBar';
import { ItemListContainer } from './Components/Container/ItemListContainer';
import { ItemDetailContainer } from './Components/ItemDetail/ItemDetailContainer';
import { CartWidget } from './Components/Cart/CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { UseProvider } from './Components/Context/cartContext';



function App() {

  return (

    <UseProvider>
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
    </UseProvider>
  )
}

export default App;