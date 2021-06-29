import {MagnifierPreview,MagnifierContainer, MagnifierZoom} from "react-image-magnifiers";
import styles from './item.module.scss';



export function ThumbItem() {



    return (
 <div className={styles.container}>
 
 <div className={styles.pictures}>
    <img src={"assets/sofa"}/>
    <img src={"assets/moveis.jpg"}/>
    <img src={"assets/bancos.jpg"}/>
    <img src={"assets/estante.jpg"}/>

 </div>
 <div>
 <MagnifierContainer>
  <div className={styles.thumbSection}>
  <div className = {styles.picture}>
  <MagnifierPreview style = {{width: "40vw", height:"30vw"}} imageSrc = "assets/sofa" />
  </div>
  <div>
  <MagnifierZoom className={styles.thumbZoom}style = {{height: "20vh"}} imageSrc = "assets/sofa" />
  </div>
  </div>
</MagnifierContainer>
</div>

</div>




    );
  }

