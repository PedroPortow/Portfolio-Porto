import React from 'react'
import styled from 'styled-components'
import Project from './Project'
import { Data } from './DataProjects'
import classes from './CssButton.module.css'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export const Container = styled.div`
  padding: 90px 0;
  height: fit-content;
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
  background-color: none;


`

function Projects() {
  return (
    <Container id='projetos'>
        <Wrapper>
          <ProjectsTitle data-aos="fade-right">{<ArrowForwardIcon style={{fontSize: '40px', marginRight:'10px'}} />}Ultimos Projetos</ProjectsTitle>
                  {Data.map(item =>  (
                  <Project item={item} key={item.id} />
                  ))} 
       
            <a href="https://github.com/PedroPortow" target="_blank"   style={{margin: '0 auto'}} data-aos="fade-up">
            <button className={classes.cta}>
                <span>Ver meus repositórios</span>
                <svg width="15px" height="10px" viewBox="0 0 13 10">
                  <path d="M1,5 L11,5"></path>
                  <polyline points="8 1 12 5 8 9"></polyline>
                </svg>
              </button>
            </a>
          
        </Wrapper>
       
    </Container> 
  )
}

export default Projects