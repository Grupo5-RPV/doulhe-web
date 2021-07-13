import ImageGallery from 'react-image-gallery';

import styles from './styles.module.scss';

interface ThumbsGalleryProps {
  images: string[];
}

export function ThumbsGallery({ images }: ThumbsGalleryProps) {
  const imagesFormatted = images.map((image) => {
    return {
      original: String(image),
      thumbnail: String(image),
    };
  });

  return (
    <div className={styles.container}>
      <ImageGallery items={imagesFormatted} />
    </div>
  );
}
