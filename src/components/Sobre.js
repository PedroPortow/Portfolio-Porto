import React from 'react'
import styled from 'styled-components'
import Animation2 from './Animations/Animation2'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export const Container = styled.div`
  padding: 40px 10px;
  height: 100vh;
  background-color: #11172B;
  width: 100%;
`

export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0px 10px;
  flex-direction: column;
  height: 90vh;
  border-bottom: 2px solid #0eebf7;
`

export const WrappDivs = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* border: 1px solid red; */
    height: 100vh;
`
export const ProjectsTitle = styled.h1`
    font-size: 5rem;
    font-weight: 600;
    color: #0EE7B7;
`

export const SobreLeft = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    /* border: 1px solid white; */
    flex: 1 1 420px;
    @media screen and (max-width: 926px){
        display: none;
    }
`

export const SobreRight = styled.div`
    display: flex;
    /* border: 1px solid pink; */
    justify-content: center;
    flex-direction: column;
    align-items: center;
    position: relative;
    flex: 1 1 420px;
    width: 100%;


   
    `
  export const SobreH1 = styled.h1`
    font-size: 3rem;
    text-shadow: -4px 5px 22px #11172b ;
    color: #0EE7B7;
    
  `
  export const SobreP = styled.p`
    font-size: 1.5rem;
    color: white;
    font-weight: 300;
    text-shadow: -4px 5px 22px #11172b ;
    
    text-align: justify;


  `
export const TextWrapper = styled.div`
  position: absolute;
  left: -120px;
  justify-content: flex-start;
  display: flex;
  flex-direction: column;
  z-index: 4;
  transition: 0.5s ease;
  /* border: 1px solid red; */
  width: 100%;

  ${WrappDivs}:hover &{
    left: -95px;
    transition: 0.5s ease;
  }

  @media screen and (max-width: 926px){
        position: static;
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



function Sobre() {
  return (
    <Container>
        <Wrapper>
        <ProjectsTitle data-aos="fade-right">{<ArrowForwardIcon style={{fontSize: '40px', marginRight:'10px'}} />}Sobre</ProjectsTitle>
            <WrappDivs>
                <SobreLeft>
                  <Animation2 />
                  <Rectangle data-aos="fade-up" />
                </SobreLeft>
                <SobreRight>
                  <TextWrapper>
                    <SobreH1 data-aos="fade-down">Quem sou?</SobreH1>
                    <SobreP data-aos="fade-down">Estou cursando Ciência da Computação na UFPEL. No fim de 2021 tive meu primeiro
                      contato com Desenvolvimento Web e, desde então, é o que estou estudando</SobreP>
                  </TextWrapper>
                </SobreRight>
            </WrappDivs>
        </Wrapper>
    </Container>
  )
}

export default Sobre