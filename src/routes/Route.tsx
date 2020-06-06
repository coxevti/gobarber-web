import { useAuth } from 'context/AuthContext';
import React from 'react';
import {
  Redirect,
  Route as ReactRouterDOMRoute,
  RouteProps as ReactRouterDOMProps,
} from 'react-router-dom';

interface RouteProps extends ReactRouterDOMProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();
  return (
    <ReactRouterDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Route;
