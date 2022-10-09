import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import './Index.css';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import { persistor } from "./store.js";
import { Provider } from "react-redux";
import { persistGate } from "redux-persist/integration/react";

ReactDOM.createRoot(document.getElementById(Elementid: 'root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <persistGate persistor={persistor}>
                    <App/>
                </persistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
