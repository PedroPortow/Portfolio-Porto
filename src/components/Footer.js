import React from 'react'
import styled from 'styled-components'
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-scroll';


export const Container = styled.div`
    width: 100%;
    height: fit-content;
    background-color: #1B223C;
    padding: 40px 10px;
`
export const Wrapper = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 0 auto;
    padding: 0px 10px;
    height: 100%;
  
`

export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 300px;
    /* border: 1px solid white; */
    height: 100%;
    width: 100%;
`

export const RightContainer = styled.div`
  display: flex;
    flex-direction: column;
    flex: 1 1 300px;
    /* border: 1px solid white; */
    height: 100%;
    width: 100%;
    text-align: end;

    @media screen and (max-width: 639px){
      margin-top: 20px;
      text-align: start;
    }
`

export const Title = styled(Link)`
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 500;
  opacity: 0.5;

  &:hover{
    opacity: 1;
  }
`

export const Desc = styled.p`
  color: #fff;
  font-weight: 200;
  opacity: 0.5;
  width: 60%;

`

export const LinkS = styled(Link)`
  color: #fff;
  font-weight: 300;
  opacity: 0.5;
  cursor: pointer;
    transition: 0.5s;

  &:hover{
    opacity: 1;
  }
  
`

export const SocialMediaWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 40%;
    justify-content: space-between;
    margin-top: 20px;
`

export const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 25px;
  /* border: 1px solid red; */
`

export const CopyTitle = styled.p`
  color: #fff;
  font-weight: 100;
  opacity: 0.5;
`

function Footer() {
  return (
    <Container>
        <Wrapper>
            <LeftContainer>
                <Title start>Entre em contato e venha dar uma nova cara à sua marca!</Title>
                <Desc>Uma identidade visual é fundamental para expandir seu negócio</Desc>
                <SocialMediaWrapper>
                  <a href="https://github.com/PedroPortow" target='_blank'>
                    <GitHubIcon sx={{fontSize: 25, color: '#fff', opacity: '0.5'}} />
                  </a>
                  <a href="https://www.instagram.com/pedro.portow/" target='_blank'>
                    <InstagramIcon sx={{fontSize: 25, color: '#fff', opacity: '0.5'}} />
                  </a>
                  <a href="https://twitter.com/pedroportow" target='_blank'>
                  <TwitterIcon sx={{fontSize: 25, color: '#fff', opacity: '0.5'}} />
                  </a>
                  <a href="https://www.linkedin.com/in/pedro-lu%C3%ADs-rodrigues-porto-35912022a/" target='_blank'>
                  <LinkedInIcon sx={{fontSize: 25, color: '#fff', opacity: '0.5'}} />
                  </a> 
                </SocialMediaWrapper>
            </LeftContainer>
           
            <RightContainer>
                <Title to="home" 
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}>PORTO</Title>
                <LinkS to="sobre" 
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}>Sobre</LinkS>
                <LinkS to="projetos" 
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}>Projetos</LinkS>
                <LinkS to="habilidades" 
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}>Habilidades</LinkS>
                <LinkS to="contato" 
                 smooth={true}
                 duration={500}
                 spy={true}
                 exact='true'
                 offset={-80}>Contato</LinkS>
            </RightContainer>
            
        </Wrapper>
        <CopyrightWrapper>
              <CopyTitle>© 2022 Porto</CopyTitle>
              <CopyTitle>All rights reserved</CopyTitle>
          </CopyrightWrapper>
    </Container>
  )
}

export default Footer