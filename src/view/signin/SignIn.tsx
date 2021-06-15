import { Wrapper } from './Signin.Style';
import { AccountBox } from '../../components/accountBox';
import { UserContext } from '../../provider/UserProvider'
import { useContext, useEffect } from 'react'

export const SignIn = (props: any) => {
	const [authebticatedUser, setAuthebticatedUser] = useContext(UserContext)
  return (
    <Wrapper>
		<button onClick={() =>{setAuthebticatedUser("dsad")}}>ACCSES HomeView</button> {/* Temp tills det går att logga in */}
      <AccountBox />
    </Wrapper>
  );
};
