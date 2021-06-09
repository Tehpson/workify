import './MobileNavigation.css'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../../../assets/provider/UserProvider'

export const MobileNavigation = () => {
	const history = useHistory()
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)

	return (
		<div>
		</div>
	)
}
