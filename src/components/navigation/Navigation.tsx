import { DeskopNavigation } from './desktopnavigation/DeskopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const Navigation = (props:any) => {
	const { width, height } = useWindowDimensions();
	const displayNav = () => {
	  return width <= 600 ? <MobileNavigation /> : <DeskopNavigation />;
	};
	return <div>{displayNav()}</div>;
  };
