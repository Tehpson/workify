import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {SignIn} from "../view/signin/SignIn"
import RoutingPath from './RoutingPath'

export const Routes = (props: { children?: React.ReactChild }) => {

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
<<<<<<< HEAD
				<Route exact path={RoutingPath.signIn} component={SignIn} />
				<Route component={SignIn} />
=======
				<Route exact path={RoutingPath.signInView} component={(SignInView)} />
				<Route exact path={RoutingPath.homeView} component={(HomeView)} />
				<Route component={View404} />
>>>>>>> 591f2753f66fe77be6f54b3f66c3da2deab38985
			</Switch>
		</BrowserRouter>
	)
}
