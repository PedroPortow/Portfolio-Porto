import React from 'react'
import { Data } from './DataProjects'
import styled from 'styled-components'
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

export const Button = styled.button`
    height: 4rem;
    margin: 0 0 0rem 5rem;
    background: none;
    border: none;

    A{
        color: #fff;
        font-size: 2rem;
        font-weight: 300;
        display: flex;
        align-items: center;
        gap: 0.8rem;
        transition: 0.5s;
    }

`
export const TextWrapper = styled.div`
    position:absolute ;
    top: 3rem ;
    right: -10rem;
    transition: 0.5s;
    width: fit-content; 
`


export const ProjectsWrapper = styled.div`
    width: 100%;
    display: flex;
    height: 25rem;
    align-items: flex-end;
    position: relative;
    margin: 50px 0px;

    &:hover{
        >section{
            .TextWrapper{
                right: -12rem;
            }

            .Image{
                opacity: 0.8;
            }

        }
    }

    >section {
        width:50rem ;
        height: 100%;
        
        position: relative;
    }

    &:nth-child(even){
        flex-direction: row-reverse;
        /* border: 1px solid green; */
        >Button{
            margin: 3rem 5rem 0 0;
        }

        .TextWrapper{
            text-align: left;
            right: 0;
            left: -10rem;
            /* background-color: red; */
        }


        &:hover{
        >section{
            .TextWrapper{
                left: -12rem;

            }

            .Image{
                opacity: 0.8;
            }
        }
        }

        
    }
     
    @media screen and (max-width: 1450px) {
        section{
            width: 40rem;
        }
    }
    
    @media screen and (max-width: 1000px){
        section{
            width: 100%;
        }
        .TextWrapper{
            left: 1rem;
            top: 1rem;
        }
        ${Button} {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            margin: 0;
        }
        &:nth-child(even){
            flex-direction: row;
            /* border: 1px solid green; */
            section{
             width: 100%;
            }

            .TextWrapper {
                left: 1rem;
                top: 1rem;
                text-align: left;

            }

            &:hover{
                >section{
                    .TextWrapper{
                        left:1rem;

                    }
                }
            }

            ${Button} {
            position: absolute;
            bottom: 1rem;
            right: 1rem;
            margin: 0;
             }

           
        }
    }
`

export const Image = styled.img`
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    background-size: cover;
    opacity: 0.5;
    transition: all 0.5s ease;
`



export const ProjectTitle = styled.h2`
    font-size: 2rem;
    font-weight: 600;
    color: #0EE7B7;
    text-shadow: -4px 5px 22px #11172b ;
`
export const ProjectDesc = styled.h2`
    font-size: 1.5rem;
    font-weight: 300;
    color: white;
    opacity: 0.9;
    text-shadow: -4px 5px 22px #11172b ;
`
export const A = styled.a`

    ${ProjectsWrapper}:hover &{
        color: #0EE7B7;
    }

`


function Project({ item }) {
  return (
    <ProjectsWrapper >
       <section data-aos="fade-up">
           <Image src={item.img} className='Image'/>
           <TextWrapper className='TextWrapper'>
               <ProjectTitle>{item.title}</ProjectTitle>
               <ProjectDesc>{item.desc}</ProjectDesc>
           </TextWrapper>
       </section>
       <Button>
           <A href='#' className='a'>Projeto {<ArrowCircleRightOutlinedIcon />}</A>
       </Button>
    </ProjectsWrapper>
  )
}

export default Project