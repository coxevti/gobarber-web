// import SignUp from 'pages/SignUp';
import AppProvider from 'context';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from 'routes';
import React from 'react';
import GlobalStyle from 'styles/global';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>
    <GlobalStyle />
  </Router>
);

export default App;
