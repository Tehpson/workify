import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { SignIn } from '../view/signin/SignIn';
// import {homeView} from "../view/signin/homeView"
// import {SignIn} from "../view/signin/SignIn"
import RoutingPath from './RoutingPath';

export const Routes = (props: { children?: React.ReactChild }) => {
  return (
    <BrowserRouter>
      {props.children}
      <Switch>
        <Route exact path={RoutingPath.signIn} component={SignIn} />
        <Route component={SignIn} />
        {/* <Route exact path={RoutingPath.homeView} component={homeView} />
				<Route component={View404} /> */}
      </Switch>
    </BrowserRouter>
  );
};
