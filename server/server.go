package main

import (
	"fmt"
  "net"
  "bufio"
)

const PORT = 8080

func main() {

  fmt.Printf("Starting server on port %d\n", PORT)

  ServePort := fmt.Sprintf(":%d", PORT)

  ln, err := net.Listen("tcp", ServePort)

  if err != nil {
    fmt.Println(err)
    return
  }

  defer ln.Close()

  for {
    conn, _ := ln.Accept()
    go handleConnection(conn)
  }
}

func handleConnection(con net.Conn) {
  for {
    data, err := bufio.NewReader(con).ReadString('\n')

    if (err != nil) {
      fmt.Println(err)
      return
    }

    fmt.Println(data)
  }

  con.Close()
}
