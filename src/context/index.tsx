import { AuthProvider } from 'context/AuthContext';
import { ToastProvider } from 'context/ToastContext';
import React from 'react';

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>
    <ToastProvider>{children}</ToastProvider>
  </AuthProvider>
);

export default AppProvider;
