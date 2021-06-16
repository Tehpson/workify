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
  const [crendatials, setCrendatials] = useState({email:"", username:"", password:"",confirmPassword:""})
  const ConfirmPassword()=>{
    if(crendatials.password==crendatials.confirmPassword){

    }
  }
  const ConfirmLogin = async () => {
		try {
			const { data } = await WorkifyAPIService.RequestLogin(
				authebticatedUser
			);
			setServerRespons(data);
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
