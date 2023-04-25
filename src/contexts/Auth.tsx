import { createContext, useState, FunctionComponent, useContext, PropsWithChildren, useMemo } from 'react';

interface AuthContextType {
  user: string;
  signIn: (user: string) => void;
  signOut: () => void;
}

const fakeAuthProvider = {
  isAuthenticated: false,
  signIn() {
    fakeAuthProvider.isAuthenticated = true;
  },
  signOut() {
    fakeAuthProvider.isAuthenticated = false;
  }
};

const AuthContext = createContext<AuthContextType>(null);

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<string>('');

  const signIn = (newUser: string) => {
    setUser(newUser);
    return fakeAuthProvider.signIn();
  };

  const signOut = () => {
    setUser('');
    return fakeAuthProvider.signOut();
  };

  const value = useMemo(() => {
    return { user, signIn, signOut };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within a AuthProvider');
  }
  return context;
};
