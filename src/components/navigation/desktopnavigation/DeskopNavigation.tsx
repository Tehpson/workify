<<<<<<< HEAD
import './DeskopNavigation.css';

export const DeskopNavigation = () => {
  return <div className="desktopNavigationWrapper"></div>;
};
=======
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
>>>>>>> 591f2753f66fe77be6f54b3f66c3da2deab38985
