import './MobileNavigation.css'
import { SideBar } from './sidebar/SideBar'
import { useState, useContext } from 'react'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'
import Logotype from '../../../assets/images/logo.png'
import hambugerMenu from '../../../assets/images/hambugerMenu.svg'
import { Profile } from '../../profile/Profile'
import { UserContext } from '../../../assets/provider/UserProvider'

export const MobileNavigation = () => {
	const history = useHistory()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)
	const [openDrawr, setOpenDrawr] = useState(false)

	const renderLogin = () => {
		return authebticatedUser
			? <div className='mobileDisplayUsername'>
				<div><Profile /></div>
			</div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
	}

	return (
		<div>
			<div className='mobileNavigationWrapper'>
				<img className='hambugerlogo' src={hambugerMenu} alt='..error' onClick={() => setOpenDrawr(true)} />
				<img className='navigationLogotype' src={Logotype} alt={'..error'} onClick={() => history.push(RoutingPath.homeView)} />
				{renderLogin()}

			</div>
			<SideBar
				drawerIsOpen={openDrawr}
				drawerHandler={setOpenDrawr}
			/>
		</div>
	)
}
