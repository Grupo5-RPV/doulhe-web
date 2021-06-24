import { FiClock } from 'react-icons/fi';

import style from './itemCarousel.module.scss';

export function ItemCarousel() {
  return (
    <div className={style.itemContainer}>
      <div className={style.descriptionItem}>
        <div>
          <strong>Nome do leilão</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dignissim sem, vitae pharetra metus. Donec eu accumsan nisl, et
            bibendum justo. Pellentesque bibendum tellus id dolor iaculis
          </p>
        </div>
        <img
          src="https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png"
          alt="imagem"
        />
      </div>
      <div className={style.itemClock}>
        <span>Doações abertas</span>
        <div>
          <FiClock />
          <strong>24:34:31</strong>
        </div>
      </div>
    </div>
  );
}
