import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import { posts } from "./utils";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(({ author, content, id, publishedAt }) => (
            <Post
              key={id}
              author={author}
              content={content}
              id={id}
              publishedAt={publishedAt}
            />
          ))}
        </main>
      </div>
    </div>
  );
}

export default App;
