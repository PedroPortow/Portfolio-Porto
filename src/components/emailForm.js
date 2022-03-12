import React from 'react'
import Modal from './Modal';
import emailjs from '@emailjs/browser';
import {FormWrap, FormH1, Form, Label, Input, Textarea, Button, IconX} from './emailFormElements'


function Mailer(props) {
  
  function sendEmail(e){
    e.preventDefault();
    emailjs.sendForm('gmailMessage','template_agvbf9l', e.target,'erg0PaWwb9r_A5XIk' ).then(res =>{console.log(res)}).catch(err=>console.log(err))
  }


  return (
    <Modal  >
    <FormWrap>
    <IconX onClick={props.hideModalHandler}/>
        <FormH1>Formulario para contato</FormH1> 
        <Form onSubmit={sendEmail}>
            <Label>Nome</Label>
            <Input type='text' name="name" />

            <Label>Endereço de E-mail</Label>
            <Input type='email' name="user_email" />

            <Label>Mensagem</Label>
            <Textarea name='message' rows='4' />
            <Button type="submit" onClick={props.onCloseModal}>Enviar</Button>
        </Form>
      </FormWrap>
    </Modal>
  )
}

export default Mailer