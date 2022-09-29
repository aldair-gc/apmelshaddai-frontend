import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from "react-toastify";
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Routes from "./routes/index";
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import GlobalStyle from "./styles/global";
import 'react-toastify/dist/ReactToastify.css';
import { store, persistor } from './app/store';


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Routes />
          <ToastContainer autoClose={3000} />
          <Footer />
          <GlobalStyle />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
