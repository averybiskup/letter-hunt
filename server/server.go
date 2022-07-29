package main

import (
    "fmt"
    "log"
    "net/http"
    "github.com/gorilla/websocket"
)

const PORT = 8080;

func homePage(w http.ResponseWriter, r *http.Request) {
    fmt.Fprintf(w, "Home Page")
}

func setupRoutes() {
    http.HandleFunc("/", homePage)
    http.HandleFunc("/ws", wsEndpoint)
}

func main() {
    fmt.Println("Listening on port:", PORT)
    setupRoutes()
    log.Fatal(http.ListenAndServe(":8080", nil))
}

var upgrader = websocket.Upgrader{
    ReadBufferSize:  1024,
    WriteBufferSize: 1024,
}

func wsEndpoint(w http.ResponseWriter, r *http.Request) {
  upgrader.CheckOrigin = func(r *http.Request) bool { return true }

  // upgrade this connection to a WebSocket
  // connection
  ws, err := upgrader.Upgrade(w, r, nil)
  if err != nil {
      log.Println(err)
  }

  defer ws.Close()

  log.Println("Client Connected")
  err = ws.WriteMessage(1, []byte("Hi Client!"))
  if err != nil {
      log.Println(err)
  }

  for {
    messageType, p, err := ws.ReadMessage()
    log.Println(messageType)
    log.Println(p)

    if err != nil {
      log.Println("Error:", err)
      break
    }

    fmt.Println(string(p))

    if err := ws.WriteMessage(messageType, p); err != nil {
      log.Println(err)
      return
    }
  }
}
