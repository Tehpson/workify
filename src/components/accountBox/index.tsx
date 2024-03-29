import { useState } from 'react'
import styled from 'styled-components'
import { LoginForm } from './loginForm'
import { motion } from 'framer-motion'
import { AccountContext } from './accountContext'
import { SignupForm } from './signupForm'

const BoxContainer = styled.div`
  width: 680px;
  min-height: 550px;
  display: grid | inline-grid;
  grid-template-columns: 100px 50px 100px;
  border-radius: 19px;
  background-color: #00abc7;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`

const TopContainer = styled.div`
  width: 100%;
  height: 260px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`

const BackDrop = styled(motion.div)`
  width: 160%;
  height: 550px;
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -520px;
  left: -70px;
  background: rgb(241, 196, 15);
  background: linear-gradient(
    58deg,
    rgba(241, 196, 15, 1) 20%,
    rgba(243, 172, 18, 1) 100%
  );
`

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  color: #fff;
  z-index: 10;
  margin: 0;
`

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  margin-top: 7px;
  
`

const InnerContainer = styled.div`
  width: 100%;
  height: 330px;
  display: flex;
  flex-direction: column;
  padding: 0 1.8em;
`

const backdropVariants = {
  expanded: {
    width: '233%',
    height: '1050px',
    borderRadius: '20%',
    transform: 'rotate(60deg)',
  },
  collapsed: {
    width: '160%',
    height: '550px',
    borderRadius: '50%',
    transform: 'rotate(60deg)',
  },
}

const expandingTransition = {
  type: 'spring',
  duration: 2.3,
  stiffness: 40,
}

export function AccountBox(props: any) {
  const [isExpanded, setExpanded] = useState(false)
  const [active, setActive] = useState('signin')

  const playExpandingAnimation = () => {
    setExpanded(true)
    setTimeout(() => {
      setExpanded(false)
    }, expandingTransition.duration * 1000 - 1600)
  }

  const switchToSignup = () => {
    playExpandingAnimation()
    setTimeout(() => {
      setActive('signup')
    }, 100)
  }

  const switchToSignin = () => {
    playExpandingAnimation()
    setTimeout(() => {
      setActive('signin')
    }, 100);
  }

  const contextValue = { switchToSignup, switchToSignin }

  return (
    <AccountContext.Provider value={contextValue}>
      <BoxContainer>
        <TopContainer>
          <BackDrop
            initial={false}
            animate={isExpanded ? 'expanded' : 'collapsed'}
            variants={backdropVariants}
            transition={expandingTransition}
          />
          {active === 'signin' && (
            <HeaderContainer>
              <HeaderText>Welcome</HeaderText>
              <HeaderText>To Workify</HeaderText>
              <HeaderText>Make training more social</HeaderText>
              <SmallText>Please sign-in to continue!</SmallText>
            </HeaderContainer>
          )}
          {active === 'signup' && (
            <HeaderContainer>
              <HeaderText>Create</HeaderText>
              <HeaderText>Account</HeaderText>
              <HeaderText>Make training more social</HeaderText>
              <SmallText>Please sign-up to continue!</SmallText>
            </HeaderContainer>
          )}
        </TopContainer>
        <InnerContainer>
          {active === 'signin' && <LoginForm />}
          {active === 'signup' && <SignupForm />}
        </InnerContainer>
      </BoxContainer>
    </AccountContext.Provider>
  );
}
