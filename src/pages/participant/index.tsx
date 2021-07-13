import {Header} from '../../components/Header';
import styles from './participant.module.scss';

export default function Item(){
    return(
        <div className={styles.containner}>
            <Header/>
       

        <div className={styles.sectionForm}>
        <h2>Preencha seus dados</h2>
        <form>
        <input type="text" placeholder="Nome"/>
        <input type="email" placeholder="E-mail"/>
        <input type="password" placeholder="Senha" />
        <input type="password" placeholder="Confirmar senha"/>
        <input type="text" placeholder="User"/>
        <input type="text" placeholder="Endereço"/>
        <input type="phone" placeholder="Telefone"/>
        <button type="submit">Salvar</button>
        </form>
        </div>


        </div>










    );
}