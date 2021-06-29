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

interface User {
  name: string;
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
    //dev
    const { token, user } = await signInRequest({ email, password });

    setCookie(undefined, '@doulhe:token', token, {
      maxAge: 60 * 60 * 24, //24hours
    });

    setUser(user);

    Router.push('/');
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
