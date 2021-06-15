import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SignIn } from "../view/signin/SignIn"
import { homeView } from '../view/home/homeView'
import {View404} from '../view/404view/404View'
import RoutingPath from './RoutingPath'
import { UserContext } from '../provider/UserProvider'
import React from 'react'
import { useContext, useEffect } from 'react'

export const Routes = (props: { children?: React.ReactChild }) => {
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)


	const ReturnView = () => { return authebticatedUser ? homeView : SignIn }

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route path={RoutingPath.homeView} component={ReturnView()} />
				<Route component={View404} />
			</Switch>
		</BrowserRouter>
	)
}

