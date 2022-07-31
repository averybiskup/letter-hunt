const connect = (s: WebSocket) => {

  s.onopen = () => {
    alert('Connected')
  };

  s.onmessage = (event) => {
    alert(`[message] Data received from server: ${event.data}`);
    s.send('Test message')
  };
}

export default connect
