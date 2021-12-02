let socket = io.connect();
// document.getElementById('sendToAll').addEventListener('click',function(){
//     socket.emit('sendToAll', (document.getElementById('message').value))
// });
document.getElementById('sendtome').addEventListener('click',function(){
  socket.emit('sendtome',(document.getElementById('message').value))});


socket.on('displayMessage', (message) => {
  document.getElementById('target').innerHTML += '<br>'+message;
});