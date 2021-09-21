import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./global.css";

import Albums from "./pages/Albums";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/albums" component={Albums} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
