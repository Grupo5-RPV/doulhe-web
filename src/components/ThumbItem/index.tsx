import {MagnifierPreview,MagnifierContainer, MagnifierZoom} from "react-image-magnifiers";
import styles from './item.module.scss';

export function ThumbItem() {



    return (
  <MagnifierContainer>
  <div className={styles.thumbSection}>
  <div className = "example-class">
  <MagnifierPreview style = {{width: "40vw", height:"30vw"}} imageSrc = "assets/sofa" />
  </div>
  <div>
  <MagnifierZoom className={styles.thumbZoom}style = {{height: "20vh", width: "vw"}} imageSrc = "assets/sofa" />
  </div>
  </div>
</MagnifierContainer>





    );
  }

