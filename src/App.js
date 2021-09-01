import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./Components/Login/Login";
import Page1 from "./Components/Page1/Page1";
import Page2 from "./Components/Page2/Page2";
import Page3 from "./Components/Page3/Page3";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/page1" component={Page1} />
          <Route path="/page2" component={Page2} />
          <Route path="/page3" component={Page3} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
