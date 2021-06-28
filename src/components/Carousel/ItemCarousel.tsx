import { useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';

import { differenceInSeconds } from 'date-fns';

import { convertSeconds } from '../../utils/converts';
import style from './itemCarousel.module.scss';

interface itemCarouselProps {
  name: string;
  descrition: string;
  finalDate: Date;
  image: string;
}

export function ItemCarousel({
  name,
  finalDate,
  descrition,
  image,
}: itemCarouselProps) {
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
    <div className={style.itemContainer}>
      <div className={style.descriptionItem}>
        <div>
          <strong>{name}</strong>
          <p>{descrition}</p>
        </div>
        <img src={image} alt={name} />
      </div>
      <div className={style.itemClock}>
        <span>Doações abertas</span>
        <div>
          <FiClock />
          <strong>{convertSeconds(timeTofinished)}</strong>
        </div>
      </div>
    </div>
  );
}
