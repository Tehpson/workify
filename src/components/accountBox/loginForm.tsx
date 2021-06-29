
import React, { useContext, useEffect, useState } from 'react';
import WorkifyAPIService from '../../assets/api/service/WorkifyAPIService'
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
import { useHistory } from 'react-router-dom';
import RoutingPath from '../../routes/RoutingPath';
export const LoginForm = (props: any) => {

  const history = useHistory();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { switchToSignup } = useContext(AccountContext);
  const [serverResponse, setServerResponse] = useState<any>()
  const [errorMSG, setErrorMSG] = useState("")

  const Login = async () => {
	  try {
		  setServerResponse(await WorkifyAPIService.RequestLogin(credentials.email, credentials.password))

	  } catch (error) {
		  console.log(error)
		  setErrorMSG(error?.status)
	  }
  }


  useEffect(() => {
	  history.push(RoutingPath.homeView)
  }, [serverResponse])


  return (
    <BoxContainer>
      <FormContainer>
        <Input
          type="email"
          value={credentials.email}
          placeholder="Please enter your e-mail address"
          onChange={(event) =>
            setCredentials({
              email: event.target.value,
              password: credentials.password,
            })
          }
        />
        <Input
          value={credentials.password}
          type="password"
          placeholder="enter your password"
          onChange={(event) =>
            setCredentials({
              email: credentials.email,
              password: event.target.value,
            })
          }
        />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink href="#">Forget your password?</MutedLink>
      <Marginer direction="vertical" margin="1.6em" />
      <SubmitButton type="submit" onClick={() => Login()}>
        Signin
      </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        Don't have an accoun?
        <BoldLink href="#" onClick={switchToSignup}>
          Signup
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};
