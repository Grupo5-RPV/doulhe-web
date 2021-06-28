import { useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';

import { differenceInSeconds } from 'date-fns';

import { convertInReais, convertSeconds } from '../../utils/converts';
import styles from './styles.module.scss';

interface AuctionItemProps {
  name: string;
  category: string;
  finalDate: Date;
  highestBid: number;
}

export function AuctionItem({
  name,
  category,
  finalDate,
  highestBid,
}: AuctionItemProps) {
  const [timeTofinished, setTimeTofinished] = useState(
    differenceInSeconds(finalDate, new Date())
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
      <img
        src="https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png"
        alt="item"
      />
      <div className={styles.detailsItem}>
        <span>{category}</span>
        <strong>MAIOR LANCE: {convertInReais(highestBid)}</strong>
        <span>{name}</span>
      </div>
    </div>
  );
}
