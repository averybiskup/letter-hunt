package main

import (
	"fmt"
	"log"
  "html"
	"net/http"
  )

func main() {
  http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
        fmt.Fprintf(w, "Hello, %q", html.EscapeString(r.URL.Path))
    })

  http.HandleFunc("/hi", func(w http.ResponseWriter, r *http.Request){
      fmt.Fprintf(w, "Hi")
  })

  fmt.Fprintf(w, "Listening")
	log.Fatal(http.ListenAndServe(":8081", nil))
}