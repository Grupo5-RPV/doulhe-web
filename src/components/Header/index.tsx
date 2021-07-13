import { FiUser } from 'react-icons/fi';

import Link from 'next/link';

import { useAuth } from '../../hooks/auth';
import styles from './styles.module.scss';

export function Header() {
  const { user } = useAuth();

  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerWrapper}>
        <div className={styles.logoWrapper}>
          <Link href="/">
            <div className={styles.logo}>
              <span>Doulhe</span>
              <h1>Leilões</h1>
            </div>
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link href="/login">
            <button className={styles.button}>
              <FiUser />
              <span>{user?.email}</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
