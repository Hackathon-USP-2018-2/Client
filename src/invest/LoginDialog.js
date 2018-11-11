import React from 'react';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import firebase from 'firebase';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

class LoginDialog extends React.Component {
  state = {loading: true};

  render() {
    const uiConfig = {
      callbacks: {
        signInSuccessWithAuthResult: (authResult) => {
          this.props.onLogin(authResult);
          return false;
        },
        uiShown: () => this.setState({loading: false}),
      },
      // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
      signInFlow: 'popup',
      signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
      ],
      tosUrl: '<your-tos-url>',
      privacyPolicyUrl: '<your-privacy-policy-url>'
    };

    return (
      <Dialog open={this.props.open}>
        <DialogTitle>{ (this.state.loading && 'Loading...') || 'Login' }</DialogTitle>
        <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      </Dialog>
    );
  }
}

export default LoginDialog;
