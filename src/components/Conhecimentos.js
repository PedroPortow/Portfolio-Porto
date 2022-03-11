import React from 'react'
import styled from 'styled-components'
import {AiFillHtml5 }from 'react-icons/ai'
import {DiCss3, DiJavascript, DiReact, DiBootstrap} from 'react-icons/di'
import {SiNextdotjs} from 'react-icons/si'
import classes from './Conhecimentos.module.css';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



export const Container = styled.div`
  padding: 40px 0;
  height: 80vh;
  background-color: #11172B;

`

export const Wrapper = styled.div`
  
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap ;
  margin: 0 auto;
  padding: 0px 10px;
  flex-direction: column;

`

export const ConhecimentosTitle = styled.h1`
    font-size: 5rem;
    font-weight: 600;
    color: #0EE7B7;
    margin-bottom: 40px;
   
`

export const ConhecimentosDesc = styled.p`
  color: white;
  margin-bottom: 40px;
`

export const IconsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-content: center;
  /* border: 2px solid red; */
  align-self: center;
  height: fit-content;
`

export const BackgroundGradient = styled.div`
    background-image: linear-gradient(225deg, #313860 0%, #11172B 100%);
     height: 200px;
     max-width: 200px;
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
     transition: all 0.2s ease;
     &:hover{
       transform: scale(1.1);
       transition: all 0.2s ease;

     }

`
export const TextIcons = styled.h3`
  color: #7AC7E3;
text-align:center ;
`

function Conhecimentos(props) {


  return (
    <Container>
        <Wrapper>
        <ConhecimentosTitle data-aos="fade-right">{<ArrowForwardIcon style={{fontSize: '40px', marginRight:'10px'}} />}Conhecimentos</ConhecimentosTitle>

          <IconsWrapper >
           
              <BackgroundGradient data-aos="fade-down">
                <AiFillHtml5 className={classes.icon} />
               <TextIcons>HTML</TextIcons>
              </BackgroundGradient>
              
              <BackgroundGradient data-aos="fade-down" data-aos-delay="100">
                <DiCss3  className={classes.icon} />
                <TextIcons>CSS</TextIcons>
              </BackgroundGradient>
              <BackgroundGradient data-aos="fade-down" data-aos-delay="200">
                <DiJavascript className={classes.icon}  />
                <TextIcons>Javascript</TextIcons>
              </BackgroundGradient>
              <BackgroundGradient data-aos="fade-down" data-aos-delay="300">
                <DiReact  className={classes.icon} />
                <TextIcons>ReactJS</TextIcons>
              </BackgroundGradient>
              <BackgroundGradient data-aos="fade-down" data-aos-delay="400">
                <SiNextdotjs  className={classes.icon} />
                <TextIcons>NextJS</TextIcons>
              </BackgroundGradient>
              <BackgroundGradient data-aos="fade-down" data-aos-delay="500">
                <DiBootstrap  className={classes.icon} />
                <TextIcons>Bootstrap</TextIcons>
              </BackgroundGradient>
             
          </IconsWrapper>
        </Wrapper>
    </Container>

  )
}

export default Conhecimentos