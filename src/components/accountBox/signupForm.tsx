import React, { useContext, useEffect, useState } from 'react';
import {
	BoldLink,
	BoxContainer,
	FormContainer,
	Input,
	MutedLink,
	SubmitButton,
} from './Style';
import { Marginer } from '../marginer';
import { AccountContext } from './accountContext';
import WorkifyAPIService from '../../assets/api/service/WorkifyAPIService';
import { useHistory } from 'react-router-dom';
import RoutingPath from '../../routes/RoutingPath';
import {UserContext} from '../../provider/UserProvider'


export function SignupForm(props: any) {
	const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)

	const { switchToSignin } = useContext(AccountContext);
	const history = useHistory()
	const [credentials, setCrendatials] = useState({
		email: '',
		username: '',
		password: '',
		confirmPassword: '',
	});
	const [serverResponse, setserverResponse] = useState<any>();
	useEffect(() => { 
		if(serverResponse.status == 200){
			setAuthenticatedUser(serverResponse?.data);
		}
		history.push(RoutingPath.homeView)
	 }, [serverResponse]);

	const ConfirmPassword = () => {
		if (credentials.password == credentials.confirmPassword) {
			ConfirmLogin();
		} else {
			console.log('Password does not match');
		}
	};
	const ConfirmLogin = async () => {
		try {
			const data = await WorkifyAPIService.CreateUser(
				credentials.username,
				credentials.password,
				credentials.email
			);
			setserverResponse(data);

		} catch (error) {
			console.log(error);
		}
	};

	return (
		<BoxContainer>
			<FormContainer>
				<Input
					type="text"
					placeholder="UserName"
					value={credentials.username}
					onChange={(event) =>
						setCrendatials({
							email: credentials.email,
							username: event.target.value,
							password: credentials.password,
							confirmPassword: credentials.confirmPassword,
						})
					}
				/>
				<Input
					type="email"
					placeholder="Email"
					value={credentials.email}
					onChange={(event) =>
						setCrendatials({
							email: event.target.value,
							username: credentials.username,
							password: credentials.password,
							confirmPassword: credentials.confirmPassword,
						})
					}
				/>
				<Input type="password"
					placeholder="Password"
					value={credentials.password}
					onChange={(event) =>
						setCrendatials({
							email: credentials.email,
							username: credentials.username,
							password: event.target.value,
							confirmPassword: credentials.confirmPassword,
						})
					}
				/>
				<Input type="password"
					placeholder="Confirm Password"
					value={credentials.confirmPassword}
					onChange={(event) =>
						setCrendatials({
							email: credentials.email,
							username: credentials.username,
							password: credentials.password,
							confirmPassword: event.target.value,
						})
					}
				/>
			</FormContainer>
			<Marginer direction="vertical" margin={10} />
			<SubmitButton type="submit"
				onClick={() => ConfirmPassword()}>Signup</SubmitButton>
			<Marginer direction="vertical" margin="1em" />
			<MutedLink href="#">
				Already have an account?
				<BoldLink href="#" onClick={switchToSignin}>
					Signin
				</BoldLink>
			</MutedLink>
		</BoxContainer>
	);
}


