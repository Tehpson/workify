import './DeskopNavigation.css'
import RoutingPath from '../../../routes/RoutingPath'
import { useHistory } from 'react-router-dom'

export const DeskopNavigation = () => {
  const history = useHistory()

  return (
    <div className='desktopNavigationWrapper'>
      <h3 className='siteTitle' onClick={() => history.push(RoutingPath.homeView)}>WORKIFY</h3>
    </div>
  )
}

