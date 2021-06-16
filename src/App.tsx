import './assets/global/Global.css'
import { Routes } from './routes/Routes'
import { Navigation } from './components/navigation/Navigation'
import { UserProvider } from './provider/UserProvider'

function App() {
	return (
		<UserProvider>
			<Routes>
				<Navigation />
			</Routes>
		</UserProvider>
	)
}
export default App