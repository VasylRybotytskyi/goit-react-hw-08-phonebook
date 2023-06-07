import { Title, UnderTitle, HomeLink, Section, PreTitle } from './Home.styled'; // для стилів
import { useSelector } from 'react-redux';

export default function Home() {
  const { isLoaggedIn } = useSelector(state => state.auth); // для перевірки чи залогінений користувач

  return (
    <Section>
      <Title>Welcome 👋 to your PhoneBook</Title>
      <PreTitle>Now you will exactly not forget your contacts!</PreTitle>

      {/* якщо користувач не залогінений, то виводимо підказку, якщо залогінений, також виводимо підказку */}
      {!isLoaggedIn ? (
        <UnderTitle>
          Please
          <HomeLink to="/register">Register</HomeLink>
          or
          <HomeLink to="/login">Log in</HomeLink>
          to be able to use your PhoneBook
        </UnderTitle>
      ) : (
        <UnderTitle>
          Go to the tab
          <HomeLink to="/contacts">Contacts</HomeLink>
          and manage your contacts
        </UnderTitle>
      )}
    </Section>
  );
}
