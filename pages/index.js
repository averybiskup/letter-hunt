import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import connect from '../helpers/connect'

const isBrowser = typeof window !== "undefined";

export default function Home() {

  const [wsInstance, setWsInstance] = useState(null);

  const url = 'ws://localhost:8080/ws'

  useEffect(() => {
    const s = new WebSocket(url);
    setWsInstance(s)
    connect(s) 

    return () => {
      if (s?.readyState !== 3) {
        s.close() 
      }
    }
  }, [])

  
  return (
    <div>
      Hello, letterhunt
      
    </div>
  )
}
