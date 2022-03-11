import React from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import classes from './Conhecimentos.module.css';


export const Container = styled.div`
  padding: 40px 10px;
    height: 50vh;
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
    border: 1px solid pink;
    justify-content: space-evenly;
    
    width: 50%;
    margin-bottom: 150px;
   
`

export const Button = styled.a`
    display: flex;
    background-color: #0EE7B7;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    width: fit-content;
    align-self: center;
    cursor: pointer;
    border-radius: 15px;
   color : white;
   border: 1px solid white;

`
function Contact() {
  return (
    <Container>
        <Wrapper>
            <ConhecimentosTitle>{<ArrowForwardIcon style={{fontSize: '40px', marginRight:'10px'}} />}Contato</ConhecimentosTitle>
            <IconsWrapper>
                <GitHubIcon className={classes.icon2} />
                <InstagramIcon  className={classes.icon2}/>
                <TwitterIcon className={classes.icon2} />
                <LinkedInIcon className={classes.icon2} />
            </IconsWrapper>
            <Button href='#'> Enviar e-mail</Button>
        </Wrapper>
    </Container>
  )
}

export default Contact