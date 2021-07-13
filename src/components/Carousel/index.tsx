import SwiperCore, { Pagination, Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ItemCarousel } from './ItemCarousel';
import styles from './styles.module.scss';

interface CharityAuctionsItem {
  id: string;
  name: string;
  description: string;
  image: string;
  finalDate: string;
}

interface CarouselProps {
  items: CharityAuctionsItem[];
}

export function Carousel({ items }: CarouselProps) {
  SwiperCore.use([Pagination, Navigation, EffectCoverflow]);

  return (
    <Swiper
      spaceBetween={100}
      className={styles.carrouselContainer}
      pagination={{ clickable: true }}
      loop
      navigation
      effect="coverflow"
      centeredSlides={true}
      slidesPerView={2}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        modifier: 2,
        slideShadows: false,
      }}
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <ItemCarousel
            name={item.name}
            descrition={item.description}
            finalDate={item.finalDate}
            image={item.image}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
