import React from 'react';
import ReactDOM from 'react-dom';
import { RoutesComponent } from './components/routes/Routes';
import './index.css';
import * as firebase from 'firebase/app';
import { createContext } from 'react';
import { AuthProvider } from './components/providers/AuthProvider';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCZib3hmFfxY3_vC-pasfpO8xYZIaBeJfo',
  authDomain: 'vk-copy-5d862.firebaseapp.com',
  projectId: 'vk-copy-5d862',
  storageBucket: 'vk-copy-5d862.appspot.com',
  messagingSenderId: '841086119978',
  appId: '1:841086119978:web:b6e8d99cc66d3c3f6a5353',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <RoutesComponent />
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
