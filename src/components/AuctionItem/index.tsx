import { useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';

import { differenceInSeconds, parse } from 'date-fns';

import { convertInReais, convertSeconds } from '../../utils/converts';
import styles from './styles.module.scss';

interface AuctionItemProps {
  name: string;
  category: string;
  imageUrl: string;
  finalDate: string;
  highestBid: number;
}

export function AuctionItem({
  name,
  category,
  imageUrl,
  finalDate,
  highestBid,
}: AuctionItemProps) {
  const [timeTofinished, setTimeTofinished] = useState(
    differenceInSeconds(new Date(finalDate), new Date())
  );

  useEffect(() => {
    if (timeTofinished >= 0) {
      setTimeout(() => {
        setTimeTofinished(timeTofinished - 1);
      }, 1000);
    }
  }, [timeTofinished]);

  return (
    <div className={styles.auctionItem}>
      <div className={styles.clock}>
        <FiClock />
        <strong>{convertSeconds(timeTofinished)}</strong>
      </div>
      <img src={imageUrl} alt={name} />
      <div className={styles.detailsItem}>
        <span>{category}</span>
        <strong>MAIOR LANCE: {convertInReais(highestBid)}</strong>
        <span>{name}</span>
      </div>
    </div>
  );
}
