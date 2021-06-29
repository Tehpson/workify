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
import { getTsBuildInfoEmitOutputFilePath } from 'typescript'


export const Index = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const [serverResponse, setServerResponse] = useState<any>(null)
	const [userResponse, setUserResponse] = useState<any>(null)
	const history = useHistory()


	useEffect(() => {
		fetchWorkoutData()
		getUserName()
	}, [])

	const fetchWorkoutData = async () => {
		try {
			const { data } = await WorkifyAPIService.GetallWorkouts(authenticatedUser)
			setServerResponse(data)
		} catch (error) {
			console.log(error)
		}
	}

	const displayData = () => {
		if (serverResponse == null) {
			return (
				<div>
					No workout yet
				</div>
			)
		} else {

			return (
				serverResponse?.map((item: any) =>
					<div className='Layout'>
						{console.log(item)}
						<Layout1 userName={userResponse?.username} Comment={item.comment} Title={item.title} Time={item.time} Date={item.date} />
					</div>
				)
			)
		}
	}

	const getUserName = async () => {
		try {
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
	
	function calcuteTotaltime() {
		var tot = 0
		serverResponse?.map((item: any) => { tot = tot + Number.parseInt(item.time,10) })
		return tot
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
				{userResponse?.username}
			</span>
			<span
				className="bio">
				{userResponse?.bio}
			</span>
			<div className="homeTotlaWorkout">
				Your total Workout Time is: {calcuteTotaltime()} min <br/>
				Your total Number of workout is: {serverResponse?.length}
			</div>
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
