import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoaggedIn } = useAuth();

  return (
    <nav>
      <NavLink className={styles.link} to="/">
        Home
      </NavLink>
      {isLoaggedIn && (
        <NavLink className={styles.link} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
