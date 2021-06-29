import { DeskopNavigation } from './desktopnavigation/DeskopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
import { UserContext } from '../../provider/UserProvider'
import { useContext, useState } from 'react'

export const Navigation = (props: any) => {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
	const isLoginpage = () => {
		if(authenticatedUser == null){
			return width <= 1200 ? <MobileNavigation /> : <DeskopNavigation />
		}
	}

	const { width } = useWindowDimensions()
	const displayNav = () => {
		return width <= 1200 ? <MobileNavigation /> : <DeskopNavigation />
	}
	return <div>{isLoginpage()}</div>
}
