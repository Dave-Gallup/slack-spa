// @flow

import React from 'react';
import ReactDOM from 'react-dom';
import openSocket from 'socket.io-client';
import actions from './Actions';


import App from './App';
import registerServiceWorker from './registerServiceWorker';
///code
ReactDOM.render(
  React.createElement(App),
  document.getElementById('root'),
);
registerServiceWorker();

const socket = openSocket('https://databraid.localtunnel.me');


socket.on('messages', (messages) => {
  actions.processNewMessages(messages)
});