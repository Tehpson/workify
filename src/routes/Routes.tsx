import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { HomeView } from '../view/homeview/HomeView'
import { SignInView } from '../view/signinview/SignInView'
import { ShopView } from '../view/shopview/ShopView'
import { AccsesorisView } from '../view/accesoriesview/AccsesorisView'
import { HotView } from '../view/hotview/HotView'
import { BrandsView } from '../view/brandsview/BrandsView'
import { View404 } from '../view/404view/404View'
import RoutingPath from './RoutingPath'
import { useContext, useEffect } from 'react'
import { UserContext } from '../assets/provider/UserProvider'
import LocalStorage from '../assets/cache/LocalStorage'
import { ProfileView } from '../view/authenticatedViews/profileview/ProfileView'
import { SettingsView } from '../view/authenticatedViews/settingsview/SettingsView'

export const Routes = (props: { children?: React.ReactChild }) => {
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)

	const isUserAuthenticated = () => {
		setAuthebticatedUser(localStorage.getItem(LocalStorage.username))
	}

	const blockedRoutesIfAuthenticated = (view: React.FC) => { return authebticatedUser ? ProfileView : view }

	const blockedRoutesIfNotAuthenticated = (view: React.FC) => { return !authebticatedUser ? SignInView : view }

	useEffect(() => {
		isUserAuthenticated()
	})

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route exact path={RoutingPath.signInView} component={blockedRoutesIfAuthenticated(SignInView)} />
				<Route exact path={RoutingPath.accesoriesView} component={AccsesorisView} />
				<Route exact path={RoutingPath.brandsView} component={BrandsView} />
				<Route exact path={RoutingPath.shopView} component={ShopView} />
				<Route exact path={RoutingPath.hotView} component={HotView} />
				<Route exact path={RoutingPath.homeView} component={HomeView} />
				<Route exact path={RoutingPath.profileView} component={blockedRoutesIfNotAuthenticated(ProfileView)} />
				<Route exact path={RoutingPath.settingsView} component={blockedRoutesIfNotAuthenticated(SettingsView)} />
				<Route component={View404} />
			</Switch>
		</BrowserRouter>
	)
}
