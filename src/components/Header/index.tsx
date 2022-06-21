
import igniteLogo from '../../assets/ignite-logo.svg'

import styles from "./styles.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logo do projeto" />
    </header>
  );
};

export default Header;
