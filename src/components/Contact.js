import React, {useState} from 'react';
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import classes from './Conhecimentos.module.css'
import Mailer from './emailForm';
import classes2 from './CssButton.module.css'


export const Container = styled.div`
  padding: 40px 10px;
    height: fit-content;
  background-color: #11172B;
  /* border: 4px solid green; */
  width: 100%;
`

export const Wrapper = styled.div`
  /* border: 4px solid green; */
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap ;
  margin: 0 auto;
  padding: 0px 10px;
  flex-direction: column;    
`

export const ConhecimentosTitle = styled.h1`
   
    color: #0EE7B7;
    margin-bottom: 40px;
    font-size: 5rem;
    font-weight: 600;
    color: #0EE7B7;
    @media screen and (max-width: 790px){
      font-size: 3rem;
    }
    @media screen and (max-width: 448px){
      font-size: 2rem;
    }
`

export const IconsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-self: center;
    /* border: 1px solid pink; */
  
   justify-content: center;
    align-items: center;
    height: fit-content;
    width: 100%;
    

    margin-bottom: 50px;
   
`

export const Button = styled.a`
    display: flex;
    background-color: #0EE7B7;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    width: fit-content;
    align-self: center;
    cursor: pointer;
    border-radius: 15px;
    color : white;
    border: 1px solid white;

`

export const BackgroundGradient = styled.div`
    background-image: linear-gradient(225deg, #313860 0%, #11172B 100%);
     height: 100px;
     width: 100px;
    margin: 20px;
     z-index: 1;
     border-radius: 50%;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-direction: column;
     padding: 1px;
     overflow: hidden;
     flex: 1 1 200px;
    transition: all 1s ease;
     
`
function Contact() {
  const [modalIsShown, setModalIsShown] = useState(false);
  
  const showModalHandler = () => {
    setModalIsShown(true);
  }

  const hideModalHandler = () => {
    setModalIsShown(false);
  }
  return (
    <Container id='contato'>
        <Wrapper>
            <ConhecimentosTitle data-aos="fade-right">{<ArrowForwardIcon style={{fontSize: '40px', marginRight:'10px'}} />}Contato</ConhecimentosTitle>
            <IconsWrapper>
                {modalIsShown && <Mailer onCloseModal={hideModalHandler} hideModalHandler={hideModalHandler} />}
              <a href="https://github.com/PedroPortow" target='_blank'>
                <BackgroundGradient data-aos="fade-down" data-aos-delay="100">
                    <GitHubIcon sx={{fontSize: 55}} className={classes.icon2} data-aos="zoom-in" />
                </BackgroundGradient>
              </a>
              <a href="https://www.instagram.com/pedro.portow/" target='_blank'>
              <BackgroundGradient data-aos="fade-down" data-aos-delay="200">
                
                  <InstagramIcon  sx={{fontSize: 55}} className={classes.icon2}/>
                </BackgroundGradient>
              </a>
              <a href="https://twitter.com/pedroportow" target='_blank'>
              <BackgroundGradient data-aos="fade-down" data-aos-delay="300">
                  <TwitterIcon sx={{fontSize: 55}} className={classes.icon2} />
                  </BackgroundGradient>
              </a>
                <a href="https://www.linkedin.com/in/pedro-lu%C3%ADs-rodrigues-porto-35912022a/" target='_blank'>
                <BackgroundGradient data-aos="fade-down" data-aos-delay="400">
                  <LinkedInIcon sx={{fontSize: 55}} className={classes.icon2}  />
                  </BackgroundGradient>
                </a>
            </IconsWrapper>
            <button className={classes2.cta} onClick={showModalHandler}>
                <span>Enviar E-mail</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
            </button>
        </Wrapper>
    </Container>
  )
}

export default Contact