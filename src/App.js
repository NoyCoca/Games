// import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routing from "./ruoting";
import StoreProvider from './providers/StoreProvider'

function App() {

  return (
    <Router>
      <StoreProvider>
        <div className="App">
          <div className="AppBack">
            <Routing />
          </div>
        </div>
      </StoreProvider>
    </Router>
  );
}

export default App;
