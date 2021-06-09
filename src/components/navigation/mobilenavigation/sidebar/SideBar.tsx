import './SideBar.css'
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../../../routes/RoutingPath'
import xCircle from '../../../../assets/images/x-circle.svg'

export const SideBar = (props: { drawerIsOpen: boolean, drawerHandler: (handler: boolean) => void }) => {
	const history = useHistory()
	return (
		<div className={props.drawerIsOpen ? 'side-drawer open' : 'side-drawer'}>
			<img className='sidebarX' onClick={() => props.drawerHandler(false)} src={xCircle} alt='exit' /> <br/>
			<span className='sidebarShopButton' onClick={() => history.push(RoutingPath.shopView)}>Shop</span><br/>
			<span className='sidebarAccesoriesButton' onClick={() => history.push(RoutingPath.accesoriesView)}>Accesories</span><br/>
			<span className='sidebarBrandsButton' onClick={() => history.push(RoutingPath.brandsView)}>Brands</span><br/>
			<span className='sidebarHotButton' onClick={() => history.push(RoutingPath.hotView)}>Hot!!</span><br/>
		</div>
	)
}
