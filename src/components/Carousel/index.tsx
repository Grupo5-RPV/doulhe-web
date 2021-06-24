import SwiperCore, { Pagination, Navigation, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ItemCarousel } from './ItemCarousel';
import styles from './styles.module.scss';

export function Carousel() {
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
      <SwiperSlide>
        <ItemCarousel />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCarousel />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCarousel />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCarousel />
      </SwiperSlide>
    </Swiper>
  );
}
