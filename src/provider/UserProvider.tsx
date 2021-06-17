import {useState, createContext} from 'react'

export const UserContext = createContext<any>(null)

export const UserProvider = (props: {children?: React.ReactChild}) => {
	const [authebticatedUser, setAuthebticatedUser] = useState({  username: "",uID: "" })

	return (
		<UserContext.Provider value={[authebticatedUser, setAuthebticatedUser]}>
			{props.children}
		</UserContext.Provider>
	)
}
