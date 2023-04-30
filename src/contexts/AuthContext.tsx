import { createContext, useState, FunctionComponent, useContext, PropsWithChildren, useMemo } from 'react';

interface User {
  name: string;
}

interface AuthContextType {
  user: User | null;
  signIn: (name: string) => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (name: string) => {
    setUser({ name });
  };

  const signOut = () => {
    setUser(null);
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
