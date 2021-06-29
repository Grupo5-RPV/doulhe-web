import { v4 as uuid } from 'uuid';
interface SignInRequestData {
  email: string;
  password: string;
}

const delay = (amount = 750) =>
  new Promise((resolve) => setTimeout(resolve, amount));

//dev
export async function signInRequest(data: SignInRequestData) {
  await delay();

  return {
    token: uuid(),
    user: {
      name: 'Roger Fernandes',
      email: 'roger.afernandes@hotmail.com',
    },
  };
}

//dev
export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: 'Roger Fernandes',
      email: 'roger.afernandes@hotmail.com',
    },
  };
}
