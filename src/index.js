import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class MyCustomElement extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    ReactDOM.render(<App />, this);
  }
  disconnectedCallback(){
    ReactDOM.unmountComponentAtNode(this);
  }
}

customElements.define('react-chart', MyCustomElement);

reportWebVitals();
