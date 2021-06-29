import { FiAlertCircle, FiChevronDown } from 'react-icons/fi';

import Link from 'next/link';

import { AuctionItem } from '../components/AuctionItem';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div>
      <Header />
      <main className={styles.mainHome}>
        <img src="/assets/dashboard.svg" />
        <section>
          <div className={styles.titleSection}>
            <span>Leilões</span>
            <h2>Beneficentes</h2>
            <button>
              <FiAlertCircle />
            </button>
          </div>
          <div className={styles.carrouselContainer}>
            <Carousel />
          </div>
        </section>
        <section className={styles.openAuctions}>
          <header>
            <div className={styles.titleSection}>
              <span>Leilões</span>
              <h2>Abertos</h2>
            </div>
            <div className={styles.filter}>
              <button>
                <strong>Tipo de leilão</strong>
                <FiChevronDown />
              </button>
              <button>
                <strong>Categoria</strong>
                <FiChevronDown />
              </button>
              <button>
                <strong>Modalidade</strong>
                <FiChevronDown />
              </button>
            </div>
          </header>
          <main>
            <Link href="/item">
              <div className={styles.itemContainer}>
                <AuctionItem
                  name="Sofá usado"
                  category="Móveis"
                  finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
                  highestBid={1398}
                />
              </div>
            </Link>
            <Link href="/item">
              <div className={styles.itemContainer}>
                <AuctionItem
                  name="Sofá usado"
                  category="Móveis"
                  finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
                  highestBid={1398}
                />
              </div>
            </Link>
            <Link href="/item">
              <div className={styles.itemContainer}>
                <AuctionItem
                  name="Sofá usado"
                  category="Móveis"
                  finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
                  highestBid={1398}
                />
              </div>
            </Link>
            <Link href="/item">
              <div className={styles.itemContainer}>
                <AuctionItem
                  name="Sofá usado"
                  category="Móveis"
                  finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
                  highestBid={1398}
                />
              </div>
            </Link>
            <Link href="/item">
              <div className={styles.itemContainer}>
                <AuctionItem
                  name="Sofá usado"
                  category="Móveis"
                  finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
                  highestBid={1398}
                />
              </div>
            </Link>
            <Link href="/item">
              <div className={styles.itemContainer}>
                <AuctionItem
                  name="Sofá usado"
                  category="Móveis"
                  finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
                  highestBid={1398}
                />
              </div>
            </Link>
            <Link href="/item">
              <div className={styles.itemContainer}>
                <AuctionItem
                  name="Sofá usado"
                  category="Móveis"
                  finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
                  highestBid={1398}
                />
              </div>
            </Link>
          </main>
        </section>
      </main>
    </div>
  );
}
