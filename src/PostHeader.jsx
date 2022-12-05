// import { Container } from './style';
import PropTypes from 'prop-types';
import Button from './Button';

function PostHeader({ title, id, onRemove, read }) {
  return (
    <>
      <strong>{read ? <s>{title}</s> : title}</strong>
      <Button onClick={() => onRemove(id)}>Delete</Button>
    </>
  );
}

PostHeader.propTypes = {
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  read: PropTypes.bool.isRequired,
};

export default PostHeader;
