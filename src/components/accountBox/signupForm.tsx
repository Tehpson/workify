import React, { useContext, useState } from 'react';

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

export function SignupForm(props: any) {
  const { switchToSignin } = useContext(AccountContext);
  const [credentials, setCrendatials] = useState({email:"", username:"", password:"",confirmPassword:""})
  const [serverResponse, setserverResponse] = useState<any>()
  const ConfirmPassword=()=>{
    if(credentials.password==credentials.confirmPassword){

    }
  }
  const ConfirmLogin = async () => {
		try {
			const { data } = await WorkifyAPIService.CreateUser(credentials.username, credentials.password, credentials.email,);
			setserverResponse(data);
		} catch (error) {
			console.log(error);
		}
	};


  return (
    <BoxContainer>
      <FormContainer>
        <Input type="text" placeholder="Full Name" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Input type="password" placeholder="Confirm Password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">Signup</SubmitButton>
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
