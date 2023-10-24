import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { useState } from 'react';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;


const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => `linear-gradient(225deg, ${theme.primary} 0%, ${theme.button} 100%)`};
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }
`;


const Contact = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState('');
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = form.current.from_email.value;
    const name = form.current.from_name.value;
    const subject = form.current.subject.value;
    const message = form.current.message.value;

    if (!email || !name || !subject || !message) {
      setError('Tüm alanları doldurmalısınız.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Geçerli bir email giriniz !');
      return;
    }

    emailjs
      .sendForm('service_67slqzo', 'template_lrfuk4k', form.current, 'YTz_gQN27o-56_0Kl')
      .then(
        (result) => {
          setOpen(true);
          form.current.reset();
          setError('');
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };

  return (
    <div id="contact">
    <Container>
      <Wrapper>
        <Title>Bize Ulaşın</Title>
        <Desc>Burada olmasını istediğiniz gönderiler için, bize ulaşmakta çekinmeyin!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email 🚀</ContactTitle>
          <ContactInput placeholder="E-mail Adresiniz" name="from_email" />
          <ContactInput placeholder="Adınız" name="from_name" />
          <ContactInput placeholder="Konu" name="subject" />
          <ContactInputMessage placeholder="Mesaj" rows="4" name="message" />
          <ContactButton type="submit" value="Gönder" />
        </ContactForm>
        {error && <div style={{ color: 'red' }}>{error}</div>}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email başarı ile gönderildi."
          severity="success"
        />
      </Wrapper>
    </Container>
    </div>
  );
};

export default Contact;


