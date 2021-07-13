import React, { useState } from 'react';
import {Header} from '../../components/Header';
import styles from './participant.module.scss';


export default function Item(){

const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [senha, setSenha] = useState('');
const [user, setUser] = useState('');
const [endereco, setEndereco] = useState('');
const [telefone, setTelefone] = useState('');

async function click(event){
  event.preventDefault();
}

const data = {
  "name": nome,
  "username": user,
  "password": senha,
  "email": email,
  "adress": endereco,
  "phone": telefone,
}


try {
 // const response = await api.post("participant", data)

}catch (ex) {
  alert(ex.response.data.message)
}


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