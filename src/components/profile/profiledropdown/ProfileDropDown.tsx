import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../routes/RoutingPath'
import './ProfileDropDown.css'
import {useContext} from 'react'
import { UserContext } from '../../../assets/provider/UserProvider'
import LocalStorage from '../../../assets/cache/LocalStorage'

export const ProfileDropDown = () => {
	const history = useHistory()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)
	const logOutUser = () =>{
		setAuthebticatedUser(false)
		localStorage.removeItem(LocalStorage.username)
		history.push(RoutingPath.homeView)
	}
	return (
		<div className="profileDropDownWrapper">
			<span>Firstname Lastname</span> <br/>
			<span>Email@email.se</span><br/>
			<hr/>
			<span onClick={() => history.push(RoutingPath.profileView)}>Profile</span><br/>
			<span onClick={() => history.push(RoutingPath.settingsView)}>Settings</span> <br/>
			<span onClick={logOutUser}>Logout</span><br/>
		</div>
	)
}