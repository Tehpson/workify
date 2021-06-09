import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { SignInView } from '../view/signinview/SignInView'
import { View404 } from '../view/404view/404View'
import RoutingPath from './RoutingPath'
import { useContext, useEffect } from 'react'
import { UserContext } from '../assets/provider/UserProvider'
import LocalStorage from '../assets/cache/LocalStorage'

export const Routes = (props: { children?: React.ReactChild }) => {
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)

	const isUserAuthenticated = () => {
		setAuthebticatedUser(localStorage.getItem(LocalStorage.username))
	}

	const blockedRoutesIfAuthenticated = (view: React.FC) => { return authebticatedUser ? HomeView : view }

	const blockedRoutesIfNotAuthenticated = (view: React.FC) => { return !authebticatedUser ? SignInView : view }

	useEffect(() => {
		isUserAuthenticated()
	})

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.signInView} component={blockedRoutesIfAuthenticated(SignInView)} />
				<Route exact path={RoutingPath.homeView} component={blockedRoutesIfNotAuthenticated(HomeView)} />
				<Route component={View404} />
			</Switch>
		</BrowserRouter>
	)
}
