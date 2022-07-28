package main

import (
	"fmt"
  "net"
  "bufio"
)

const PORT = 8080

func main() {

  fmt.Printf("Starting server on port %d", PORT)

  ServePort := fmt.Sprintf(":%d", PORT)

  ln, _ := net.Listen("tcp", ServePort)

  conn, _ := ln.Accept()

  for {
    message, _ := bufio.NewReader(conn).ReadString('\n')
    fmt.Print("Message Received:", string(message))
  }
}
