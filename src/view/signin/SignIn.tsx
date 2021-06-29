import { Wrapper } from './Signin.Style'
import { AccountBox } from '../../components/accountBox'
import { UserContext } from '../../provider/UserProvider'
import { useContext, useEffect } from 'react'

export const SignIn = (props: any) => {
  const [authenticatedUser, setAuthenticatedUser] = useContext(UserContext)
  return (
    <Wrapper>
      <AccountBox />
    </Wrapper>
  )
}
