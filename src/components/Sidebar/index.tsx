import React from "react";

import styles from "./styles.module.css";

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/58401291?v=4" />

        <strong>Luiz Ramos</strong>
        <span>Frontend Engineer</span>
      </div>

      <footer>
        <a href="#">Editar o seu perfil</a>
      </footer>
    </aside>
  );
};

export default Sidebar;
