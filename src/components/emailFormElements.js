import styled from "styled-components"
import { AiOutlineCloseCircle } from "react-icons/ai"

export const FormWrap = styled.div`
    display: flex;
    flex-direction: column;
`

export const FormH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
    padding: 10px 0;

    @media screen and (max-width: 480px){
        font-size: 2rem;
    }
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    
`

export const Label = styled.label`
    font-size: 1rem;
    color: #fff;
    text-align: start;
    margin-bottom: 2px;
`

export const Input = styled.input`

    margin-bottom: 20px;
    padding: 5px;
    border: none;
   
    background: white;
    color: black;
    border-radius: 5px;

    &:active{
        border: none;
        
    }

    &:focus{
        border: 2px solid red;
    }

 
`

export const Textarea = styled.textarea`
    
    padding: 5px;
    border: none;
   
    background: white;
    color: black;
    border-radius: 5px;

    &:active{
        border: none;
        
    }

    &:focus{
        border: 2px solid red;
    }

`

export const Button = styled.button`
    border-radius: 10px;
    margin-top: 20px;
    background: blue;
    white-space : nowrap ;
    padding: 12px 30px;
    color: white;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #4f73ff ;
    }
`
export const IconX = styled(AiOutlineCloseCircle)`
    cursor: pointer;
    color: #fff;
    
`
