import Header from "./components/Header";
import Post from "./components/Post";
import Sidebar from "./components/Sidebar";

import styles from "./App.module.css";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post
            author="Luiz Henrique"
            content="Um conteúdo de post muito mas muito bastante legal"
          />
          <Post
            author="Matheus Rodrigues"
            content="Um conteúdo mais legal ainda. Confia."
          />
        </main>
      </div>
    </div>
  );
}

export default App;
