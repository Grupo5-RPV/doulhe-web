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
        <ItemCarousel
          name="Sofá"
          descrition="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dignissim sem, vitae pharetra metus. Donec eu accumsan nisl, et
            bibendum justo. Pellentesque bibendum tellus id dolor iaculis"
          finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
          image="https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCarousel
          name="Sofá"
          descrition="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dignissim sem, vitae pharetra metus. Donec eu accumsan nisl, et
            bibendum justo. Pellentesque bibendum tellus id dolor iaculis"
          finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
          image="https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCarousel
          name="Sofá"
          descrition="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dignissim sem, vitae pharetra metus. Donec eu accumsan nisl, et
            bibendum justo. Pellentesque bibendum tellus id dolor iaculis"
          finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
          image="https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCarousel
          name="Sofá"
          descrition="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dignissim sem, vitae pharetra metus. Donec eu accumsan nisl, et
            bibendum justo. Pellentesque bibendum tellus id dolor iaculis"
          finalDate={new Date(2021, 5, 30, 17, 0, 0, 0)}
          image="https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png"
        />
      </SwiperSlide>
    </Swiper>
  );
}
