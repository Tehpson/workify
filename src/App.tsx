import './assets/global/Global.css'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { UserProvider } from './assets/provider/UserProvider'

export const App = () => {
	return (
			<Routes>
				<Navigation />
			</Routes>
	)
}
