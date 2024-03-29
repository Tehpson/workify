import { useState, useContext, useEffect } from 'react'
import { UserContext } from '../../provider/UserProvider'
import WorkifyAPIService from '../../assets/api/service/WorkifyAPIService'
import "./Layout1.css"
import RoutingPath from '../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'

export const Layout1 = (props: any) => {
	const history = useHistory()
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const [userRepons, setUserRepons] = useState<any>(null)
	const [title, setTitle] = useState<string>("")
	const [time, setTime] = useState<number>(0)
	const [bodyText, setBodyText] = useState<string>("")
	const date = new Date()
	const [serverResponse, setServerResponse] = useState<any>()


	useEffect(() => {
		getUserName()
	}, [])

	useEffect(() => {
		if (serverResponse?.status == 200) { history.push(RoutingPath.homeView) }
	}, [serverResponse])


	const sendData = async () => {
		try {
			setServerResponse(await WorkifyAPIService.AddWorkout(authenticatedUser, title, bodyText, time, 1))

		} catch (error) {
			console.log(error)
		}
	}

	const getUserName = async () => {
		try {
			const { data } = await WorkifyAPIService.GetUser(
				authenticatedUser
			)
			setUserRepons(
				data
			)
		}
		catch (error) {
			console.log(error)
		}
	}


	return (
		<body
			className="body">
			<div
				className="CWcontainer w-container">
				<h1
					className="CWusername">{userRepons?.username}</h1>
				<textarea
					placeholder="Describe your workout"
					rows={4}
					cols={50}
					maxLength={200}
					className="CWpost"
					onChange={event => setBodyText(event.target.value)}>
				</textarea>
				<input
					placeholder="Workout title"
					maxLength={20}
					className="CWtitle"
					onChange={event => setTitle(event.target.value)}>
				</input>
				<input
					placeholder="#"
					max={99999}
					min={0}
					maxLength={5}
					type="number"
					className="CWtime"
					onChange={event => setTime(parseInt(event.target.value))}>
				</input>
				<h1
					className="CWtimeName">min
				</h1>
				<div
					className="CWtimeofpost">{new Date().getTime} - {new Date().getDate}
				</div>
			</div>
			<button className="CWButton" onClick={() => sendData()}>AddWorkout</button>
		</body>
	)
}
