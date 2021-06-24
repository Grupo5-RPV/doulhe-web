import {} from 'react-icons/fi';
import styles from './login.module.scss';

export default function Login(){
return(
<div>

<main className={styles.mainLogin}>
<div className={styles.facadeSection}>
<div className={styles.logoSection}>
<span>Doulhe</span>
<h1>Leilões</h1>
</div>
<img src="/assets/login"/>
</div>

<div className={styles.formSection}>
<input type="text" placeholder="Login"></input>
<input type="password" placeholder="Senha"></input>
<a href="/">Esqueci minha senha</a>
<button>Entre</button>
<span>Ainda não é cadastrado?</span>
<a>Cadastre-se agora!</a>
</div>

</main>
</div>

);

}