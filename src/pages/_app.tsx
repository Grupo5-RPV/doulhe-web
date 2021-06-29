import type { AppProps } from 'next/app';

import { AuthProvider } from '../hooks/auth';

import '../styles/global.scss';
import 'swiper/swiper.scss';
import '../styles/carousel.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'react-image-gallery/styles/scss/image-gallery.scss';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}
export default MyApp;
