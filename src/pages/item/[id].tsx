import faker from 'faker';
import { GetServerSideProps } from 'next';

import { Header } from '../../components/Header';
import { ItemClock } from '../../components/ItemClock';
import { ThumbsGallery } from '../../components/ThumbsGallery';
import { convertInReais } from '../../utils/converts';
import styles from './item.module.scss';

interface ItemProps {
  itemData: {
    name: string;
    description: string;
    category: string;
    image: string[];
    minimumBid: string;
    finalDate: string;
    highestBid: string;
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
                <span>lance min {itemData.minimumBid}</span>
                <h4>{itemData.highestBid}</h4>
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
  // const { id } = params;
  // const response = await api.get(`auctions/${id}`);
  const response = {
    name: 'Sofá usado',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam unde, cumque libero temporibus deleniti voluptatibus minima dolorum quod quibusdam explicabo ipsa ullam quis fugiat vitae debitis eos adipisci ipsum.',
    category: 'Móvel',
    image: [
      'https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png',
      'https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png',
      'https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png',
    ],
    minimumBid: convertInReais(100),
    finalDate: String(faker.date.soon(1)),
    highestBid: convertInReais(140),
    createdAt: String(faker.date.recent(10)),
  };

  return {
    props: {
      itemData: response,
    },
  };
};
