import './DeskopNavigation.css'
import { useHistory } from 'react-router-dom'
import { useContext } from 'react'
import Logotype from '../../../assets/images/logo.png'
import RoutingPath from '../../../routes/RoutingPath'
import { UserContext } from '../../../assets/provider/UserProvider'


export const DeskopNavigation = () => {
	const history = useHistory()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars

	return (
		<div className='desktopNavigationWrapper'>

		</div>
	)
}
