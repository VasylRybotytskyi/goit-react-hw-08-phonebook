import { Spiner } from 'pages/ContactList/ContactList.styled';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const AppBar = () => {
  const { isLoaggedIn, isLoading } = useSelector(state => state.auth);
  return (
    <header>
      {isLoading && <Spiner />}

      <div>
        <nav>
          <div>
            <Link to="/">
              {/* <HomeIcon /> */}
              Home
            </Link>
            {isLoaggedIn && (
              <Link to="/contacts">
                {/* <ContactIcon /> */}
                Contacts
              </Link>
            )}
          </div>
          <div>
            {isLoaggedIn ? (
              <UserMenu />
            ) : (
              <>
                <Link to="/register">
                  {/* <RegIcon /> */}
                  Register
                </Link>
                <Link to="/login">
                  {/* <LogInIcon /> */}
                  Log in
                </Link>
              </>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};
