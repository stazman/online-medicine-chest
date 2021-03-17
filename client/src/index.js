import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <>
    <style type="text/css">
      {`
        body, html {
          margin: 0;
          padding: 0;
          width: 100%;
          height: 100%;
        }

        body {
          font-family: Arial;
          background-color: #5D72D0;
          color: white;
        }
        html {
          font-size: 62.5%;
        }
      `}
    </style>
        <App />
  </>,
  document.getElementById('root')
);