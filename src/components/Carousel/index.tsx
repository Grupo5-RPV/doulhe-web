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
          finalDate={new Date(2021, 5, 30, 14, 0, 0, 0)}
          image="https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCarousel
          name="Armário"
          descrition="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dignissim sem, vitae pharetra metus. Donec eu accumsan nisl, et
            bibendum justo. Pellentesque bibendum tellus id dolor iaculis"
          finalDate={new Date(2021, 5, 30, 19, 0, 0, 0)}
          image="https://photos.enjoei.com.br/armario-de-cozinha-com-balcao/1200xN/czM6Ly9waG90b3MuZW5qb2VpLmNvbS5ici9wcm9kdWN0cy8xMDIwMzA4MC9mMDE2ZTg5ZTVkYmUwODRhNGMyOGFjYjdmZDVjNjgzZS5qcGc"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCarousel
          name="Bicicleta"
          descrition="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dignissim sem, vitae pharetra metus. Donec eu accumsan nisl, et
            bibendum justo. Pellentesque bibendum tellus id dolor iaculis"
          finalDate={new Date(2021, 5, 30, 10, 0, 0, 0)}
          image="https://images.tcdn.com.br/img/img_prod/366819/bicicleta_speed_700_kestrel_rt800_carbono_tamanho_53_com_grupo_shimano_ultegra_10_velocidades_usado_6169_1_20200129131704.jpg"
        />
      </SwiperSlide>
      <SwiperSlide>
        <ItemCarousel
          name="Violão"
          descrition="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam vel
            dignissim sem, vitae pharetra metus. Donec eu accumsan nisl, et
            bibendum justo. Pellentesque bibendum tellus id dolor iaculis"
          finalDate={new Date(2021, 5, 30, 11, 0, 0, 0)}
          image="https://cdn.awsli.com.br/1152/1152823/produto/9320088034ddd6b482.jpg"
        />
      </SwiperSlide>
    </Swiper>
  );
}
