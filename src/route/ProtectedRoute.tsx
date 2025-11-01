import { JSX } from 'react';
import { Navigate } from 'react-router-dom';
// import { useAuth } from '../lib/auth';

interface ProtectedRouteProps {
  children: JSX.Element;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
//   const { isAuthenticated } = useAuth();
const isAuthenticated=true
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
};