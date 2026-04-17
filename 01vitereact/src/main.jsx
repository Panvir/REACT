import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'

function Myapp(){
  return (
    <>
    <h1>
      custom react
      </h1></>
  )
}
const ReactElement = {
    type: 'a',
    props:{
        href: 'https://google.com',
        target: '_blank'
    },
    children:'Click me to visit google'
}
const AnotherElement = (
  <a href="https://google.com" target='_blank'>Visit google</a>
)

const anotheruser="chai aur react"

const reactElement=React.createElement(
  'a',{
    href:'https://google.com',target:'_blank'
  },
  'click me to visit google',
  AnotherElement
)

createRoot(document.getElementById('root')).render(
  reactElement
)
