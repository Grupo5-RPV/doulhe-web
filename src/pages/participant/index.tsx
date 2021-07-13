import { phone } from 'faker/locale/zh_TW';
import React, { useState } from 'react';
import { Header } from '../../components/Header';
import styles from './participant.module.scss';


interface Data {
  name: string;
  username: string;
  password: string;
  email: string;
  adress: string;
  phone: string;
}

export default function Participant() {
  
  const {addParticipant, handleSubmit} = useForm();
  const {save} = useAdd();
  
  async function handleSave (data: Data){
    await save({ 
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      adress: data.adress,
      phone: data.phone,
    });
  }
  
  
  
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [user, setUser] = useState('');
  const [endereco, setEndereco] = useState('');
  const [telefone, setTelefone] = useState('');

  async function click(event) {
    event.preventDefault();
  }

  const data = {
    name: nome,
    username: user,
    password: senha,
    email: email,
    adress: endereco,
    phone: telefone,
  };

  return (
    <div className={styles.containner}>
      <Header />

      <div className={styles.sectionForm}>
        <h2>Preencha seus dados</h2>
        <form>
          <input
            type="text"
            placeholder="Nome"
            onChange={(event) => setNome(event.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={(event) => setSenha(event.target.value)}
          />
          <input
            type="password"
            placeholder="Confirmar senha"
            onChange={(event) => setSenha(event.target.value)}
          />
          <input
            type="text"
            placeholder="User"
            onChange={(event) => setUser(event.target.value)}
          />
          <input
            type="text"
            placeholder="Endereço"
            onChange={(event) => setEndereco(event.target.value)}
          />
          <input
            type="phone"
            placeholder="Telefone"
            onChange={(event) => setTelefone(event.target.value)}
          />

          <button type="submit" onClick={click}>
            Salvar
          </button>
        </form>
      </div>
    </div>
  );
}
