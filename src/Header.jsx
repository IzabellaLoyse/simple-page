// import { Container } from './styles';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import Button from './Button';
import { ThemeContext } from './ThemeContext';

function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <h1>{title}</h1>
      <Button onClick={onToggleTheme}>Mudar tema</Button>
      {children}
    </header>
  );
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};

export default Header;
