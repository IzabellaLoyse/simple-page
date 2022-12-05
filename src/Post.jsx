// import { Container } from './styles';
import PropTypes from 'prop-types';
import styles from './Post.module.css';
import PostHeader from './PostHeader';

function Post({
  title,
  subtitle,
  id,
  content,
  likes,
  onRemove,
  read,
  removed,
}) {
  return (
    <article className={removed ? styles.postDeleted : styles.post}>
      <PostHeader onRemove={onRemove} id={id} title={title} read={read} />
      <br />
      <small>{subtitle}</small>
      <p>{content.title}</p>

      <p>Likes: {likes}</p>
    </article>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
  read: PropTypes.bool.isRequired,
  removed: PropTypes.bool.isRequired,
  subtitle: PropTypes.string.isRequired,
  content: PropTypes.shape({
    title: PropTypes.string.isRequired,
  }),
  likes: PropTypes.number.isRequired,
};

export default Post;
