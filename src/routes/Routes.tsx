import { BrowserRouter, Switch, Route } from 'react-router-dom'
import {SignIn} from "../view/signin/SignIn"
import RoutingPath from './RoutingPath'
import {Index} from '../view/home/Index'

export const Routes = (props: { children?: React.ReactChild }) => {

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.signIn} component={SignIn} />
				<Route exact path={RoutingPath.homeDev} component={Index} />
				<Route component={SignIn} />
			</Switch>
		</BrowserRouter>
	)
}
