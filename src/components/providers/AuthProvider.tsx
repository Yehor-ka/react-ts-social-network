import { Auth, getAuth, onAuthStateChanged } from 'firebase/auth';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { IUser, TypeSetState } from '../../types';
import { users } from '../layout/sidebar/dataUser';
import {Firestore, getFirestore} from 'firebase/firestore'

interface IContext {
  user: IUser | null;
  setUser: TypeSetState<IUser | null>;
  ga: Auth;
  db: Firestore;
}

export const AuthContext = createContext<IContext>({} as IContext);

export const AuthProvider = ({ children }: { children: React.Component | React.ReactElement }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const ga = getAuth();
  const db = getFirestore()

  useEffect(() => {
    const unListen = onAuthStateChanged(ga, (authUser) => {
      if (authUser) {
        setUser({
          id: authUser.uid,
          avatar: users[1].avatar,
          name: authUser.displayName || '',
        });
      } else {
        setUser(null)
      }
    });
    return () => {
      unListen();
    };
  }, []);

  const values = useMemo(() => ({ user, setUser, ga, db }), [user, ga]);

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
