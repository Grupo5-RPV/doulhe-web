import { FiSearch, FiAlertTriangle, FiUser, FiMenu } from 'react-icons/fi';

import styles from './styles.module.scss';

export function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logo}>
          <span>Doulhe</span>
          <h1>Leilões</h1>
        </div>
        <div className={styles.buttons}>
          <button className={styles.button}>
            <FiSearch />
          </button>
          <button className={styles.button}>
            <FiAlertTriangle />
          </button>
          <button className={styles.button}>
            <FiUser />
          </button>
          <button className={styles.button}>
            <FiMenu />
          </button>
        </div>
      </div>
    </div>
  );
}
