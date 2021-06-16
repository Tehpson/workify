import React, { useContext, useState } from 'react';
import { RequestLogin } from '../../assets/api/service/WorkifyAPIService';
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
  const userHistory = useHistory();
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const { switchToSignup } = useContext(AccountContext);
  const Login = () => {
    RequestLogin(credentials.email, credentials.password)
    userHistory.push(RoutingPath.homeView);
  }
  // const state = {email: "",password: ""};
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
      <SubmitButton
        type="submit"
        onClick={() => Login()}
      >
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


