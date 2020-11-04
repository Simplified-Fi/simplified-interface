import React, { FC } from 'react'
import { Switch, Route } from 'react-router-dom'
// import SimplifiedSwap from '../assets/images/cro-defi-swap.svg'
import styled from 'styled-components'
import { Text } from 'rebass'
import { theme } from '../theme'

const HeroWrapper = styled.div`
  position: relative;
  max-width: 420px;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  margin: 25px 0;
  gap: 9px;
`

const HeroText = styled(Text)`
  color: ${({ theme }) => theme.text1};
`

const DefaultHero: FC = () => (
  <HeroWrapper>
    <HeroText fontSize={25} fontWeight={900} color={'#000'} >
      S I M P L I F I E D
    </HeroText>
    <HeroText fontSize={16} fontWeight={600} color={'#4fb2ea'}>
      Swap Made Simple 
    </HeroText>
  </HeroWrapper>
)

const Hero: FC = () => (
  <Switch>
    <Route component={DefaultHero} />
  </Switch>
)

export default Hero
