import {} from 'react-icons/fi';
import { Header } from '../../components/Header';
import { ThumbItem } from '../../components/ThumbItem';
import styles from './item.module.scss';

export default function Item() {

return(
<div>
<Header/>
<main>
<section className={styles.viewItemSection}>
    <div>
    <h2>Conjunto de Móveis</h2>
    <div className={styles.thumb}>
    <ThumbItem/>
    </div>
    </div>
    <div className={styles.infoSection}>
    <span>lance min R$ 1.290,00</span>
    <h4>R$ 1398,00</h4>
    <button>Dar lance</button>
    </div>
</section>

<section className ={styles.viewDescriptionSection}>
<h3>Descrição</h3>

<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
been the industry's standard dummy text ever since the 1500s, when an unknown printer took a 
galley of type and scrambled it to make a type specimen book. It has survived not only five 
centuries, but  also the leap into electronic typesetting, remaining essentially unchanged. It was
popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of
Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer
took a galley of type and scrambled it to make a type specimen book. It has survived not only five 
centuries, but  also the leap into electronic typesetting, remaining essentially unchanged. It was
 popularised in the  1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
and more recently with desktop publishing software like Aldus PageMaker including versions of 
Lorem Ipsum.
</p>

</section>













</main>
</div>
);}