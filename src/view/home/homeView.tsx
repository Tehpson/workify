import React from 'react'
import './HomeView.css'
import Avatar from '../../assets/image/avatar.png'
import { useEffect } from 'react'
import WorkifyAPIService from '../../assets/api/service/WorkifyAPIService'
import { UserContext } from '../../provider/UserProvider'
import { useContext, useState } from 'react'
import { Layout1 } from '../../components/showWorkout/Layout1'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath'
import { UserProvider } from '../../provider/UserProvider'


export const Index = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const [serverResponse, setServerResponse] = useState<any>(null)
	const [userResponse, setUserResponse] = useState<any>(null)
	const history = useHistory()


	useEffect(() => {
		fetchWorkoutData()
	}, [])

	const fetchWorkoutData = async () => {
		try {
			const { data } = await WorkifyAPIService.GetallWorkouts(
				authenticatedUser
			)
			setServerResponse(
				data
			)
		} catch (error) {
			console.log(error)
		}
	}

	const displayData = () => {
		if (serverResponse?.results == null) {
			return (
				<div>
					No workout yet
				</div>
			)
		}
		serverResponse?.results?.map((item: any) =>
			<div
				className='Layout'><Layout1 />
			</div>
		)
	}

	useEffect(() => {
		getUserName()
	}, [])

	const getUserName = async () => {
		try{
			const { data } = await WorkifyAPIService.GetUser(
				authenticatedUser
			)
			setUserResponse(
				data
			)
		}
		catch (error) {
			console.log(error)
		}
	}

	return (

		<div
			className="homeViewWrapper">
			<img
				className="ProfilePicture"
				src={Avatar}
				alt="ProfilePicture"
			/>
			<span
				className="userName">
				{userResponse?.results?.username}
			</span>
			<span
				className="bio">
				{userResponse?.results?.bio}
			</span>
			<div
				className='DisplayData'>
				{displayData()}
			</div>
			<button
				className="postButton"
				onClick={() => history.push(RoutingPath.createWorkoutView)}>
				Post
			</button>
		</div>
	)
}
