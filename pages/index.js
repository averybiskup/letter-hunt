import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useState } from 'react'
import { io } from 'Socket.IO-client'


const isBrowser = typeof window !== "undefined";

export default function Home() {

  let socket

  const startSocket = async () => {
    await fetch('/api/socket')
    socket = io()

    socket.on('connect', () => {
      console.log('Sending message')
      socket.emit('ping', 'Hello sir?')
    })

    socket.on('disconnect', () => {
      console.log('disconnect')
    })
  }

  useEffect(() => {
    if (isBrowser) { 
      startSocket()
    }

  }, [])

  
  return (
    <div>
      Hello, letterhunt
      
    </div>
  )
}
