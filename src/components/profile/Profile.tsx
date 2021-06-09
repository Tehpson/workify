import './Profile.css'
import { useContext } from 'react'
import { UserContext } from '../../assets/provider/UserProvider'
import Avatar from '../../assets/images/avatar.png'

import {ProfileDropDown} from './profiledropdown/ProfileDropDown'
export const Profile = () => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)
	return (
		<div className="profileWrapper">
			<span className="username">{authebticatedUser}</span>
			<img className='userAvatar' src={Avatar} alt='ERROR'/>
			<ProfileDropDown/>
		</div>
	)
}
