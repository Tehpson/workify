import { DeskopNavigation } from './desktopnavigation/DeskopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const Navigation = () => {
	const { width } = useWindowDimensions()

	const displayNavigation = () => {
		return width <= 1140 ? <MobileNavigation /> : <DeskopNavigation />
	}

	return (
		<div>
			{displayNavigation()}
		</div>
	)
}
