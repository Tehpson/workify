import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { SignInView } from '../view/signinview/SignInView'
import { View404 } from '../view/404view/404View'
import RoutingPath from './RoutingPath'
import { useContext, useEffect } from 'react'
import { UserContext } from '../assets/provider/UserProvider'
import LocalStorage from '../assets/cache/LocalStorage'

export const Routes = (props: { children?: React.ReactChild }) => {

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.signInView} component={(SignInView)} />
				<Route exact path={RoutingPath.homeView} component={(HomeView)} />
				<Route component={View404} />
			</Switch>
		</BrowserRouter>
	)
}
