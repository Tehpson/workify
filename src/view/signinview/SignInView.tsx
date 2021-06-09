import './SignInView.css'
import {useState, useContext} from 'react'
import {UserContext} from '../../assets/provider/UserProvider'
import {useHistory} from 'react-router-dom'
import LocalStorage from '../../assets/cache/LocalStorage'

export const SignInView = () => {
	const history = useHistory()
	const [username, setUsername] = useState<string>('')
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)

	const login = () =>{
		setAuthebticatedUser(username)
		localStorage.setItem(LocalStorage.username, username)
		history.goBack()
	}

	return (
		<div>
			<h1>{username}</h1>
			<input type='text' placeholder='enter username' onChange={event => setUsername(event.target.value)}/> <br/>
			<button  onClick={login}>Log in</button>
		</div>
	)
}
