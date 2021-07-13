import { useState, useEffect } from 'react';
import { FiAlertCircle, FiChevronDown } from 'react-icons/fi';

import { GetServerSideProps } from 'next';
import Link from 'next/link';

import { AuctionItem } from '../components/AuctionItem';
import { Carousel } from '../components/Carousel';
import { Header } from '../components/Header';
import response from '../services/auctions.json';
import { api } from '../services/server';
import styles from '../styles/home.module.scss';

interface AuctionItem {
  id: string;
  name: string;
  category: string;
  image: string;
  finalDate: string;
  highestBid: number;
}

interface ResponseItem {
  id: string;
  title: string;
  description: string;
  minimumBid: string;
  imagePath: string;
  finishedOff: string;
}

interface Response {
  id: string;
  end: string;
  closed: number;
  items: ResponseItem[];
}

interface HomeProps {
  auctionItems: AuctionItem[];
}

export default function Home({ auctionItems }: HomeProps) {
  useEffect(() => {
    console.log(auctionItems);
  }, []);

  return (
    <div>
      <Header />
      <main className={styles.mainHome}>
        <img src="/assets/dashboard.svg" />
        {/* <section>
          <div className={styles.titleSection}>
            <span>Leilões</span>
            <h2>Beneficentes</h2>
            <button>
              <FiAlertCircle />
            </button>
          </div>
          <div className={styles.carrouselContainer}>
            <Carousel items={charityAuctions} />
          </div>
        </section> */}
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
            {auctionItems.map((auction) => (
              <Link href={`item/${auction.id}`} key={auction.id}>
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
  // const response = await api.get('/auctions');

  // const data: Response[] = response.data;

  // const items = data.map((auction) => {
  //   return auction.items.map((item) => {
  //     return {
  //       id: item.id,
  //       name: item.title,
  //       category: 'Outros',
  //       image: item.imagePath,
  //       finalDate: auction.end,
  //       highestBid: item.minimumBid,
  //     };
  //   });
  // });

  // const auctionItems = items[0];

  console.log(response.data);

  return {
    props: {
      auctionItems,
    },
  };
};
