import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import Lyrics from "./components/tracks/Lyrics";

import { Provider } from "./context";
function App() {
  return (
    <Provider>
      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Index}></Route>
              <Route exact path="/lyrics/tracks/:id" component={Lyrics}></Route>
            </Switch>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
