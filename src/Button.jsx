// import { Container } from './style';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

function Button({ children, onClick }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <button
        onClick={onClick}
        style={{
          color: theme === 'dark' ? '#fff' : '#000',
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
        }}
      >
        {children}
      </button>
    </>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Button;
