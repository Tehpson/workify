import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { SignIn } from "../view/signin/SignIn"
import { Index as homeView } from '../view/home/homeView'
import { page404 } from '../view/404page/404'
import RoutingPath from './RoutingPath'
import { UserContext } from '../provider/UserProvider'
import { CreateWorkoutView } from '../view/createWorkoutView/CreateWorkoutView'
import React from 'react'
import { useContext } from 'react'

export const Routes = (props: { children?: React.ReactChild }) => {
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)


	const ReturnView = () => { return authebticatedUser ? homeView : SignIn }
	const unAuthenticatedUserRout = (view: React.FC) => { return authebticatedUser ? view : SignIn }

	return (
		<BrowserRouter>
			{props.children}
			<Switch>
				<Route
					exact path={RoutingPath.homeView}
					component={ReturnView()}
				/>
				<Route
					exact path={RoutingPath.createWorkoutView}
					component={unAuthenticatedUserRout(CreateWorkoutView)}
				/>
				<Route
					component={page404}
				/>
			</Switch>
		</BrowserRouter>
	)
}

