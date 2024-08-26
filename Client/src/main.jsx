import React from 'react';
import ReactDOM from 'react-dom/client';
import { AuthProvider } from './contexts/authcontexts/AuthContext';
import router from './Router/Router.jsx'
import './index.css'
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import store from '/src/Store.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);
