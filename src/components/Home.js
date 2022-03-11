import React, { useEffect } from 'react'
import styled from 'styled-components' 
import Animation from './Animations/Animation'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init();

export const Container = styled.div`
  height: 93.5vh;
  background-color: #11172B;
  width: 100% ;
  display: flex ;
  align-items: center;
  position: relative;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap ;
  margin: 0 auto;

  @media screen and (max-width: 1000px) {
    flex-wrap: wrap-reverse;
  }
  /* padding: 10px 20px; */
`

export const TextContainer = styled.div`
  display: flex;
  
  justify-content: center;
  flex-direction: column;
  align-items: center;
 
  flex: 1 1 500px;
`
export const AnimationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 500px;
  
  @media screen and (max-width: 1000px) {
    
  }
`

export const TextWrapper = styled.span`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  @media screen and (max-width: 1000px) {
    position: absolute;
    z-index: 24;
  }
  
`

export const TextP = styled.p`
  color: #0EE7B7;
  letter-spacing: 4px;
  text-transform: uppercase;
  text-orientation: ${props => props.vertical ? 'upright' : ''};
  writing-mode: ${props => props.vertical ? 'vertical-rl' : ''};
  
  `

export const TextH2 = styled.h2`
  color:#7AC7E3;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 500;
  margin-top: 2px;
  
  `

export const TextH1 = styled.h1`
  color: white;
  font-size: 5rem;
  `
export const Hr = styled.hr`
  border: none;
  height: 0.7vh;
  background-image: linear-gradient(225deg, #0EE7B7 0%, #2F4858 100%);
  width: 12rem;
  top: 57.2vh;
  left: 35vh;
  position: absolute;
`

  export const LeftIconsWrapper = styled.div`
    position: absolute;
    left: 15vh;
    top: 80vh;
    display: flex;
    flex-direction: column;
    /* border: 1px solid red; */
    height: 10vh;
    justify-content: space-evenly;
    opacity: 0.4;

    @media screen and (max-width: 1506px) {
        display: none;
    }

  `

  export const Hr2 = styled.hr`
    position: absolute;
    left: ${props => props.left ? '16vh;' : ''};
    right: ${props => props.right ? '16vh;' : ''};
    top: 91vh;
    border: none;
    height: 8vh;
    width: 0.5vh;
    background-color:  #0EE7B7;
    opacity: 0.4;
    @media screen and (max-width: 1506px) {
        display: none;
    }
    
  `

export const RightIconsWrapper = styled.div`
  position: absolute;
  right: 15vh;
  top: 80vh;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
  height: 10vh;
  justify-content: space-evenly;
  text-orientation: upright;
  opacity: 0.4;
  @media screen and (max-width: 1506px) {
        display: none;
    }
`

export const Rectangle = styled.div`
     background-image: linear-gradient(225deg, #313860 0%, #11172B 100%);
     height: 500px;
     width: 500px;
     position: absolute;
     z-index: 1;
     border-radius: 50%;
`


function Home(props) {

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  

  return (
    <Container>
              <LeftIconsWrapper>
                <GitHubIcon style={{color: ' #0EE7B7'}} />
                <LinkedInIcon style={{color: ' #0EE7B7'}} />
            
              </LeftIconsWrapper>
              <RightIconsWrapper>
                <InstagramIcon style={{color: ' #0EE7B7'}} />
                <TwitterIcon style={{color: ' #0EE7B7'}} />
              </RightIconsWrapper>
              <Hr2 left/>
              <Hr2 right/>
      <Wrapper>
        <TextContainer>
          <TextWrapper >
            <TextP data-aos="fade-up " >Olá, me chamo</TextP>
            <TextH1 data-aos="fade-up">Pedro Porto</TextH1>
          
            <TextH2 data-aos="fade-up" data-aos-delay="300">Sou um estudante e desenvolvedor web</TextH2>
          </TextWrapper>
        </TextContainer>
        <AnimationContainer data-aos="fade-down">
          <Animation  />
          <Rectangle />
        </AnimationContainer>
      </Wrapper>
    </Container>
  )
}

export default Home