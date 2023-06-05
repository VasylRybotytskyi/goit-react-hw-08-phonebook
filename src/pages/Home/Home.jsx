import React from 'react';
import { Title, UnderTitle, HomeLink, Section, PreTitle } from './Home.styled';
import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <Section>
      <Title>Welcome 👋 to your PhoneBook</Title>
      <PreTitle>Now you will exactly not forget your contacts!</PreTitle>

      {isLoggedIn ? (
        <UnderTitle>
          Go to the <HomeLink to="/contacts">Contacts</HomeLink> tab and manage
          your contacts
        </UnderTitle>
      ) : (
        <UnderTitle>
          Please <HomeLink to="/register">Register</HomeLink> or
          <HomeLink to="/login">Log in</HomeLink> to be able to use your
          PhoneBook
        </UnderTitle>
      )}
    </Section>
  );
}
