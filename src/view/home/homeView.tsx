import React from 'react';
import './HomeView.css';
import Avatar from '../../assets/image/avatar.png';
import { useEffect } from 'react';
import WorkifyAPIService from '../../assets/api/service/WorkifyAPIService';
import { UserContext } from '../../provider/UserProvider';
import { useContext, useState } from 'react';
import { Layout1 } from '../../components/showWorkout/Layout1';
import { useHistory } from 'react-router-dom'
import RoutingPath from '../../routes/RoutingPath';


export const Index = () => {
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)
	const [serverRespons, setServerRespons] = useState<any>(null)
	const history = useHistory()


	useEffect(() => {
		fetchWorkoutData();
	}, []);

	const fetchWorkoutData = async () => {
		try {
			const { data } = await WorkifyAPIService.GetallWorkouts(
				authebticatedUser
			);
			setServerRespons(data);
		} catch (error) {
			console.log(error);
		}
	};
	const displayData = () => {
		if (serverRespons?.results == null) {
			return (
				<div>No workout yet</div>
			)
		}
		serverRespons?.results?.map((item: any) =>
			<div className='Layout'><Layout1 /></div>)
	}

	return (

		<div className="homeViewWrapper">
			<img className="ProfilePicture" src={Avatar} alt="error.." />
			<span className="userName">User Name</span>
			<span className="bio">Bio</span>
			<div className='DisplayData'>{displayData()}</div>
			<button className="postButton" onClick={() => history.push(RoutingPath.createWorkoutView)}>Post</button>
		</div>
	);
};
