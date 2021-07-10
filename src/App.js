import { HashRouter, Route, Switch } from "react-router-dom";
import Navbar from "./Component/Navbar.js";
import ChessBoard from "./Component/ChessBoard.js";


function App() {
  return (
    <HashRouter>
      <Navbar />
      <Switch>
        <Route path="/chessboard" exact={true} component={ChessBoard} />

      </Switch>
    </HashRouter>

  );
}

export default App;
