import React from 'react';
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports';
import { Authenticator, withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <h1>Seja Bem Vindo ao Amplify - Arimatéia Júnior</h1>
          <button onClick={signOut}>Sign Out</button>
        </div>
      )}
    </Authenticator>
  );
}

export default withAuthenticator(App);
