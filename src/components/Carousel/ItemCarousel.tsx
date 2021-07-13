import { ItemClock } from '../ItemClock';
import style from './itemCarousel.module.scss';

interface itemCarouselProps {
  name: string;
  descrition: string;
  finalDate: string;
  image: string;
}

export function ItemCarousel({
  name,
  finalDate,
  descrition,
  image,
}: itemCarouselProps) {
  return (
    <div className={style.itemContainer}>
      <div className={style.descriptionItem}>
        <div>
          <strong>{name}</strong>
          <p>{descrition}</p>
        </div>
        <img src={image} alt={name} />
      </div>
      <ItemClock finalDate={finalDate} />
    </div>
  );
}
