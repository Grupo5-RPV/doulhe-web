import { useForm } from 'react-hook-form';

import { useAuth } from '../../hooks/auth';
import styles from './login.module.scss';

export default function Login() {
  const { register, handleSubmit } = useForm();
  const { signIn } = useAuth();

  async function handleSignIn(data: any) {
    signIn({
      email: data.email,
      password: data.password,
    });
  }

  return (
    <div>
      <main className={styles.mainLogin}>
        <div className={styles.facadeSection}>
          <div className={styles.logoSection}>
            <span>Doulhe</span>
            <h1>Leilões</h1>
          </div>
          <img src="/assets/login" />
        </div>

        <form
          className={styles.formSection}
          onSubmit={handleSubmit(handleSignIn)}
        >
          <input
            {...register('email')}
            type="email"
            placeholder="Login"
            name="email"
          ></input>
          <input
            {...register('password')}
            type="password"
            placeholder="Senha"
            name="password"
          ></input>
          <a href="/">Esqueci minha senha</a>
          <button type="submit">Entre</button>
          <span>Ainda não é cadastrado?</span>
          <a>Cadastre-se agora!</a>
        </form>
      </main>
    </div>
  );
}
