import { useEffect, useState } from 'react';
import { FiAlertCircle, FiChevronDown } from 'react-icons/fi';

import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { AuctionItem } from '../components/AuctionItem';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import { api } from '../services/server';
import styles from '../styles/home.module.scss';

interface Auction {
  id: string;
  name: string;
  category: string;
  image: string;
  finalDate: string;
  highestBid: number;
  createdAt: string;
}

export default function Home() {
  const [auctions, setAuctions] = useState<Auction[]>([]);

  useEffect(() => {
    api
      .get('/api/auctions')
      .then((response) => setAuctions(response.data.auctions));
  }, []);

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
            {auctions.map((auction) => (
              <Link href="/item" key={auction.id}>
                <div className={styles.itemContainer}>
                  <AuctionItem
                    name={auction.name}
                    category={auction.category}
                    imageUrl={auction.image}
                    finalDate={auction.finalDate}
                    highestBid={auction.highestBid}
                  />
                </div>
              </Link>
            ))}
          </main>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
