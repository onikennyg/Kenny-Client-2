import React from 'react';
import ReactDom from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './router.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Your Google Client ID
const clientId = '418980168354-o6oghiov127pph7dnb663aj0pjqif26d.apps.googleusercontent.com';

ReactDom.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={clientId}>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
