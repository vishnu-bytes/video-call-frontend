import { BrowserRouter, Route, Switch } from "react-router-dom";

import routes from "../Common/routes";

// START: Components
import Home from "../Screens/Home";

// END: Components

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={routes.HOME} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
