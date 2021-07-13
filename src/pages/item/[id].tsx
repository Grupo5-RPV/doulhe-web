import { GetServerSideProps } from 'next';

import { Header } from '../../components/Header';
import { ItemClock } from '../../components/ItemClock';
import { ThumbsGallery } from '../../components/ThumbsGallery';
import response from '../../services/auctions.json';
import { convertInReais } from '../../utils/converts';
import styles from './item.module.scss';

interface ItemProps {
  itemData: {
    name: string;
    description: string;
    category: string;
    image: string[];
    initialBid: number;
    finalDate: string;
    highestBid: number;
    createdAt: string;
  };
}

export default function Item({ itemData }: ItemProps) {
  return (
    <div>
      <Header />
      <main className={styles.itemContainer}>
        <section>
          <h2>{itemData.name}</h2>
          <div className={styles.viewItemSection}>
            <div className={styles.thumb}>
              <ThumbsGallery images={itemData.image} />
            </div>
            <div className={styles.infoSection}>
              <div className={styles.itemClock}>
                <ItemClock finalDate={itemData.finalDate} />
              </div>
              <div className={styles.amount}>
                <span>lance min {convertInReais(itemData.initialBid)}</span>
                <h4>{convertInReais(itemData.highestBid)}</h4>
              </div>
              <button>Dar lance</button>
            </div>
          </div>
        </section>

        <section className={styles.viewDescriptionSection}>
          <h3>Descrição</h3>

          <p>{itemData.description}</p>
        </section>
      </main>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const { id } = params;

  const itemFilter = response.data.filter((item) => item.id === id);

  console.log(itemFilter);

  return {
    props: {
      itemData: itemFilter[0],
    },
  };
};
