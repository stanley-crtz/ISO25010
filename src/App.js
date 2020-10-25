import React, { useState } from 'react';
import './App.css';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from 'firebase/app';
import 'firebase/auth'
import { Redirect } from 'react-router-dom';
import srp from './Assets/Images/srp.jpg'

const App = () => {

  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }

  firebase.auth().onAuthStateChanged(user => {
    setIsSignedIn(!!user)
  })

  return (
    <div className="App">

      {
        isSignedIn ?
          <Redirect to="/Inicio" />
          :
        <>
            <div className="login-box">
              <img src={srp} className="avatar" alt="Avatar Image"/>
                <h1>¡Inicia sesion!</h1>
                <form>
                  <div className="login">
                    <div className="login-items">
                      <StyledFirebaseAuth

                        uiConfig={uiConfig}
                        firebaseAuth={firebase.auth()}
                      />
                    </div>
                  </div>
        
              </form>
            </div>
                
        </>
      }
    </div>
  );
}

export default App;
