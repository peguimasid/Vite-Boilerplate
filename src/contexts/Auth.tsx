import { createContext, useState, FunctionComponent, useContext, PropsWithChildren, useMemo } from 'react';

interface AuthContextType {
  user: string;
  signIn: (user: string, callback: VoidFunction) => void;
  signOut: (callback: VoidFunction) => void;
}

const fakeAuthProvider = {
  isAuthenticated: false,
  signIn(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = true;
    setTimeout(callback, 100);
  },
  signOut(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = false;
    setTimeout(callback, 100);
  }
};

const AuthContext = createContext<AuthContextType>(null!);

export const AuthProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [user, setUser] = useState<string>('');

  const signIn = (newUser: string, callback: VoidFunction) => {
    return fakeAuthProvider.signIn(() => {
      setUser(newUser);
      callback();
    });
  };

  const signOut = (callback: VoidFunction) => {
    return fakeAuthProvider.signOut(() => {
      setUser('');
      callback();
    });
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
