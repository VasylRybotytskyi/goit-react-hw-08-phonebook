import React from 'react';
import {
  Title,
  HomeUserGroup,
  Wrap,
  UnderTitle,
  HomeLink,
  Section,
  HomeEdit,
  HomePhoneIcon,
  HomeContactList,
} from './Home.styled';
import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoggedIn } = useSelector(state => state.auth);

  return (
    <Section>
      <Title>Welcome to your PhoneBook</Title>

      <Wrap>
        <HomeEdit />
        <HomePhoneIcon />
        <HomeUserGroup />
        <HomeContactList />
      </Wrap>

      {isLoggedIn ? (
        <UnderTitle>
          Go to the <HomeLink to="/contacts">Contacts</HomeLink> tab and manage
          your contacts
        </UnderTitle>
      ) : (
        <UnderTitle>
          Please <HomeLink to="/register">Register</HomeLink> or{' '}
          <HomeLink to="/login">Log in</HomeLink> to be able to use your
          PhoneBook
        </UnderTitle>
      )}
    </Section>
  );
}
