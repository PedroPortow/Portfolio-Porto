import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import { Data } from './DataProjects'
import { darken } from 'polished'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const Container = styled.div`
  padding: 40px 0;
  height: 200vh;
  background-color: #11172B;
  width: 100%;
  overflow: hidden;
`

export const Wrapper = styled.div`
  
  display: flex;
  max-width: 1200px;
  flex-wrap: wrap ;
  margin: 0 auto;
  padding: 0px 10px;
  width: 100%;

`
export const ProjectsTitle = styled.h1`
    font-size: 5rem;
    font-weight: 600;
    color: #0EE7B7;
`

export const WrapperButton = styled.button`
    margin: 2rem auto;
    padding: 1rem;
    border: 1px solid white;
    border-radius: 10px;
    background-color: #00B88B;

    &:hover{
      background-color:#0EE7B7 ;
      transition: all 600ms ease;
    }
  

    a{
      color: #fff;
      font-size: 1.5rem;
      width: 100%;
      height: 100%;
    }

`

function Projects() {
  return (
    <Container>
        <Wrapper>
        <ProjectsTitle data-aos="fade-right">{<ArrowForwardIcon style={{fontSize: '40px', marginRight:'10px'}} />}Ultimos Projetos</ProjectsTitle>
                {Data.map(item =>  (
                <Project item={item} key={item.id} />
                ))} 
              
        <WrapperButton>
          <a href="#">VER TODOS MEUS PROJETOS</a>
        </WrapperButton>      
        </Wrapper>
       
    </Container> 
  )
}

export default Projects