import Homepage from "./pages/Homepage";
import Productspage from "./pages/Productspage";
import Cartpage from "./pages/Cartpage";
import { Route, Redirect } from "react-router-dom";
import Loginpage from "./pages/Loginpage";

function App() {
  return (
    <div>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="/home">
        <Homepage />
      </Route>
      <Route path="/products">
        <Productspage />
      </Route>
      <Route path="/cart">
        <Cartpage />
      </Route>
      <Route path="/login">
        <Loginpage />
      </Route>
    </div>
  );
}

export default App;
