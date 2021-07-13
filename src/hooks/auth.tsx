import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react';

import Router from 'next/router';
import { parseCookies, setCookie } from 'nookies';

import { recoverUserInformation, signInRequest } from '../services/auth';
import { api } from '../services/server';

interface User {
  email: string;
}

interface SignInData {
  email: string;
  password: string;
}

interface AuthContextProps {
  isAuthenticated: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext({} as AuthContextProps);

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { '@doulhe:token': token } = parseCookies();

    if (token) {
      recoverUserInformation().then((response) => {
        setUser(response.user);
      });
    }
  }, []);

  async function signIn({ email, password }: SignInData) {
    try {
      const { data } = await api.post('/participants/login', {
        email: email,
        password: password,
      });

      setCookie(undefined, '@doulhe:token', data, {
        maxAge: 60 * 60 * 24, //24hours
      });

      setUser({
        email,
      });

      Router.push('/');
    } catch {
      alert('Confire suas credencias');
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, user }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextProps {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}
