import React from 'react'
import styled from 'styled-components'
import Animation2 from './Animations/Animation2'

export const Container = styled.div`
  height: 100vh;
  background-color: #11172B;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  display: flex;
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  max-width: 85rem;

  @media screen and (max-width:1450px) {
      max-width: 70rem;
  }
  @media screen and (max-width:1000px) {
    max-width: 50rem;
  }
  @media screen and (max-width:700px) {
    padding: 0 2rem;
  }

  border-bottom: 2px solid #0EE7B7;
  

`

export const LeftContainer = styled.div`
   flex: 1;
  /* border: 1px solid green; */
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const RightContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const TextTitle = styled.h1`
  color: #0EE7B7;
  font-size: 1.5rem;
  font-weight: 400;
`

// export const Switcher = styled.span`

// `
export const TextP = styled.p`
  color: white;
  margin-top: 15px;
  text-align: justify;
  font-size: 1.1rem;
  font-weight: 300;
  margin-bottom: 1rem;
`

export const TextH2 = styled.h2`
    color: white;
  
    font-size: 4rem;
    font-weight: 500;
    margin-top: 2px;
`
export const TextWrapper = styled.span`
  /* border: 1px solid green; */
  display: flex;
  flex-direction: column;
  width: 80%;

`

export const Button = styled.button`
  width: 40%;
  padding: 1rem;
  border-radius: 15px;
  border: white 1px solid;
  background-color: #0EE7B7;
  color: white;
  font-size: 1rem;
`



function About({imgStart}) {
  return (
   <Container>
        <Wrapper>
              <LeftContainer >
                  <Animation2  />
              </LeftContainer>
              <RightContainer>
                <TextWrapper>
                  <TextTitle data-aos="fade-up">Sobre</TextTitle>
                  <TextH2>Quem sou?</TextH2>
                  <TextP>Estou cursando Ciência da Computação na UFPEL. No fim de 2021 tive meu primeiro
                    contato com Desenvolvimento Web e, desde então, é o que estou estudando
                  </TextP>
                  <Button>Curriculum Vitae</Button>
                </TextWrapper>
              </RightContainer>
        </Wrapper>
   </Container> 
  )
}

export default About