import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';

const WithBrowser = () => <BrowserRouter><App/></BrowserRouter>

ReactDOM.render(<WithBrowser />, document.getElementById('root'));
