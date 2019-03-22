import feathers from '@feathersjs/feathers'
import io from 'socket.io-client'
import socketio from '@feathersjs/socketio-client'
import auth from '@feathersjs/authentication-client'

let baseUrl = 'http://localhost:3030';
let socket = io(baseUrl);

let client = feathers();
client.configure(socketio(socket));

client.configure(auth({
  storage: window.localStorage
}));

client.authenticate({
  strategy: 'local',
  email: 'feathers@example.com',
  password: 'secret'
}).then(response => {
  console.log('Authenticated!', response);
  return client.passport.verifyJWT(response.accessToken);
})
  .then(payload => {
    console.log('JWT Payload', payload);
    return client.service('users').get(payload.userId);
  })
  .then(user => {
    client.set('user', user);
    console.log('User', client.get('user'));
  })
  .catch(function(error){
    console.error('Error authenticating!', error);
  });

let users = client.service('users');

export {client,users };
