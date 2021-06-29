import { FiClock } from 'react-icons/fi';

import { convertSeconds } from '../../utils/converts';
import style from './styles.module.scss';

interface ItemClockProps {
  timeToFinished: number;
}

export function ItemClock({ timeToFinished }: ItemClockProps) {
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
