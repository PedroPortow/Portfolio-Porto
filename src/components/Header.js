import React, {useState, useEffect} from 'react'
import styled from '@emotion/styled';
import {FaBars} from 'react-icons/fa'
import {animateScroll as scroll} from 'react-scroll'
import { Link } from 'react-scroll';

export const Nav = styled.nav`
background: ${({ scrollNav}) => (scrollNav ? '#1B223C' : 'transparent')};
height: 80px;
margin-top: -80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
transition: all 0.5s ease;

@media screen and (max-width: 960px){
    transition: 0.8s all ease;
}

`
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
    z-index: 1;
    width: 100%;
    padding: 0 24px;
    max-width: 1100px;
`

export const NavLogo = styled.div`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;
`

export const NavLinks = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        color:#0EE7B7 ;
        transition: color 100ms ease-in-out;
    }

    &:hover{
        color:#0EE7B7;
        transition: color 100ms ease-in-out;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`
export const NavBtnLink = styled.div`
    border-radius: 50px;
    background: #8585F0;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #b4b4fa;
        color: #555;
    }
`


function Navbar({ toggle }) {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        }
        else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = function(){
        scroll.scrollToTop();
    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="" onClick={toggleHome}>PORTO</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="sobre"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        >Sobre</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projetos"  //aqui mudou em
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-120}>Projetos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="habilidades" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Habilidades</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contato" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}>Contato</NavLinks>
                    </NavItem>
                </NavMenu>
               
               
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar