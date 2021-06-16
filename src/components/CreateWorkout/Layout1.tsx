import { number } from "yargs"
import { useState, useContext } from 'react'
import { UserContext } from '../../provider/UserProvider'
import WorkifyAPIService from '../../assets/api/service/WorkifyAPIService'
import "./Layout1.css"
import { render } from "@testing-library/react"

export const Layout1 = () => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const [title, setTitle] = useState<string>("")
	const [time, setTime] = useState<number>(0)
	const [bodyText, setBodyText] = useState<string>("")
	const date = new Date()
	const [serverResponse, setServerResponse] = useState<any>()

	const sendData = async () => {
		try {
			const { data } = await WorkifyAPIService.AddWorkout(authenticatedUser, title, bodyText, time, 1)
			console.log(data)
			setServerResponse(data)
		} catch (error) {
			console.log(error)
		}
	}

	const test = async () => {
		try {
			const { data } = await WorkifyAPIService.GetUserTest()
			console.log(data)
			setServerResponse(data)
		} catch (error) {
			console.log(error)
		}
	}


	return (
		<body
			className="body">
			<div
				className="CWcontainer w-container">
				<h1
					className="CWusername">Tehpson</h1>
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
					placeholder="Workout time"
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
			<button
				className="CWButton" onClick={() => sendData()}>AddWorkout
			</button>
			<button
				className="CWButton" onClick={() => test()}>test
			</button>
		</body>
	)
}
