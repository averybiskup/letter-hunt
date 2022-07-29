const connect = (s: WebSocket) => {

  s.onopen = function(e) {
    alert('Connected')
    s.send('Hello jim')
  };

  s.onmessage = function(event) {
    alert(`[message] Data received from server: ${event.data}`);
  };


}

export default connect
