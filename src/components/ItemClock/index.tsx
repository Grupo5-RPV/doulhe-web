import { useEffect, useState } from 'react';
import { FiClock } from 'react-icons/fi';

import { differenceInSeconds } from 'date-fns';

import { convertSeconds } from '../../utils/converts';
import style from './styles.module.scss';

interface ItemClockProps {
  finalDate: string;
}

export function ItemClock({ finalDate }: ItemClockProps) {
  const [timeToFinished, setTimeToFinished] = useState(
    differenceInSeconds(new Date(finalDate), new Date())
  );

  useEffect(() => {
    if (timeToFinished >= 0) {
      setTimeout(() => {
        setTimeToFinished(timeToFinished - 1);
      }, 1000);
    }
  }, [timeToFinished]);

  return (
    <div className={style.itemClock}>
      <span>Doações abertas</span>
      <div>
        <FiClock />
        <strong>{convertSeconds(timeToFinished)}</strong>
      </div>
    </div>
  );
}
