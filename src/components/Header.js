import React from 'react'
import styled from 'styled-components'

const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4rem;
    border-bottom: 1px solid #1B2138;
    background-color: #11172B;
`


export const NavLinkItem = styled.a`
  color: white;
  font-weight: 400;
  margin: 0px 25px;
  text-transform: uppercase;
  opacity: 0.5;
  letter-spacing: 1px;
  
`
function Header() {
  return (
    <Container>
        <NavLinkItem>Home</NavLinkItem>
        <NavLinkItem>Sobre</NavLinkItem>
        <NavLinkItem>Projetos</NavLinkItem>
        <NavLinkItem>Conhecimentos</NavLinkItem>
        <NavLinkItem>Contato</NavLinkItem>
    </Container>
  )
}

export default Header