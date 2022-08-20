import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Cart from "./Components/Cart";
import Preview from "./Components/Preview";


function App() {
  return (
    <BrowserRouter>
    
     <Navbar></Navbar>
     <Switch>
     <Route path="/cart">
      <Cart/>
     </Route>
     <Route path="/preview">
      <Preview/>
     </Route>
     <Route path="/">
      <Home/>
     </Route>
     </Switch>
    
    </BrowserRouter>

  );
}

export default App;
