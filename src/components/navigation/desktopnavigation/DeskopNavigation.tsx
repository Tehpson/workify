import './DeskopNavigation.css'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import Logotype from '../../../assets/images/logo.png'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../assets/provider/UserProvider'
import { Profile } from '../../profile/Profile'


export const DeskopNavigation = () => {
	const history = useHistory()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)

	const renderLogin = () => {
		return authebticatedUser
			? <div className='displayUsername'>
				<div><Profile /></div>
			</div>
			: <span className='signInButton' onClick={() => history.push(RoutingPath.signInView)}>Sign in</span>
	}

	return (
		<div className='desktopNavigationWrapper'>
			<img className='navigationLogotype' src={Logotype} alt={'..error'} onClick={() => history.push(RoutingPath.homeView)} />
			<span className='shopButton' onClick={() => history.push(RoutingPath.shopView)}>Shop</span>
			<span className='accesoriesButton' onClick={() => history.push(RoutingPath.accesoriesView)}>Accesories</span>
			<span className='brandsButton' onClick={() => history.push(RoutingPath.brandsView)}>Brands</span>
			<span className='hotButton' onClick={() => history.push(RoutingPath.hotView)}>Hot!!</span>
			{renderLogin()}

		</div>
	)
}
