import { useState } from 'react';
import Header from './Header';
import Post from './Post';
import { ThemeProvider } from './ThemeContext';

function App() {
  const [posts, setPosts] = useState([
    {
      id: Math.floor(Math.random() * 10),
      title: 'Noticia#01',
      subtitle: 'Subtitle#01',
      content: { title: 'A casa abandonada' },
      likes: 10,
      read: false,
      removed: true,
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'Noticia#02',
      subtitle: 'Subtitle#02',
      content: { title: 'A mulher' },
      likes: 20,
      read: true,
      removed: false,
    },
    {
      id: Math.floor(Math.random() * 10),
      title: 'Noticia#03',
      subtitle: 'Subtitle#03',
      content: { title: 'A vida' },
      likes: 30,
      read: false,
      removed: false,
    },
  ]);

  const handleRefresh = () => {
    setPosts((prevState) => [
      ...prevState,
      {
        id: Math.floor(Math.random() * 10),
        title: `Noticia#${posts.length + 1}`,
        subtitle: `Subtitle#${posts.length + 1}`,
        content: { title: 'A vida' },
        likes: 30,
      },
    ]);
  };

  const handleRemovePost = (postId) => {
    setPosts((prevState) =>
      prevState.map((post) =>
        post.id === postId ? { ...post, removed: true } : post,
      ),
    );
  };

  return (
    <ThemeProvider>
      <Header title="Iza News">
        <h2>
          Posts da Semana
          <button onClick={handleRefresh}>Atualizar Post</button>
        </h2>
      </Header>

      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          onRemove={handleRemovePost}
          title={post.title}
          subtitle={post.subtitle}
          content={post.content}
          likes={post.likes}
          read={post.read}
          removed={post.removed}
        />
      ))}
    </ThemeProvider>
  );
}

export default App;
