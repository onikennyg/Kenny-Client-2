// src/App.js
import React from 'react';
import Home from './pages/Home';
import { GoogleOAuthProvider } from '@react-oauth/google';

// ReactDOM.render(
//   <GoogleOAuthProvider clientId="418980168354-o6oghiov127pph7dnb663aj0pjqif26d.apps.googleusercontent.com">
//     <App />
//   </GoogleOAuthProvider>,
//   document.getElementById('root')
// );



function App() {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default App;
