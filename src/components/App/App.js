import React from "react";
import "../../styles.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import ComingSoon from "../../pages/ComingSoon/index"
import Landing from "../../pages/Landing/Landing";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/" exact component={ComingSoon} />
            <Route path="/home" component={Landing} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
