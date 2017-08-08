import openSocket from 'socket.io-client';
const socket = openSocket('https://databraid.localtunnel.me');


socket.on('messages', (messages) => {
  console.log(messages);
});
//;
//
// function subscribeToInfo(cb) {
//   socket.on('message', data => cb(null, data.channelId));
//   socket.emit('subscribeToInfo');
// }
//
// export { subscribeToInfo }

// export function processMessages(data) {
//
// }
