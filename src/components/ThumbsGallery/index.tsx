import ImageGallery from 'react-image-gallery';

import styles from './styles.module.scss';

const images = [
  {
    original:
      'https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png',
    thumbnail:
      'https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png',
  },
  {
    original:
      'https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png',
    thumbnail:
      'https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png',
  },
  {
    original:
      'https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png',
    thumbnail:
      'https://i.pinimg.com/originals/4f/c3/a3/4fc3a33627db8cdf267b869a3caed4a1.png',
  },
];

export function ThumbsGallery() {
  return (
    <div className={styles.container}>
      <ImageGallery items={images} />
    </div>
  );
}
