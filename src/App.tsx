// import SignUp from 'pages/SignUp';
import AppProvider from 'context';
import SignIn from 'pages/SignIn';
import React from 'react';
import GlobalStyle from 'styles/global';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>
    <GlobalStyle />
  </>
);

export default App;
