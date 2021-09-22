import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./global.css";

import Home from "./pages/Home";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;
