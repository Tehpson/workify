import { DeskopNavigation } from './desktopnavigation/DeskopNavigation'
import { MobileNavigation } from './mobilenavigation/MobileNavigation'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'

export const Navigation = (props:any) => {
	const { width } = useWindowDimensions();
	const displayNav = () => {
	  return width <= 1200 ? <MobileNavigation /> : <DeskopNavigation />;
	};
	return <div>{displayNav()}</div>;
  };
