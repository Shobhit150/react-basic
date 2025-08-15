import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {App2} from './App.jsx'

function MyApp(){
  return(
    <h1>okk !!</h1>
  )
}

// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank'
//   },
//   children: 'Click me to visit google'
// }
const user = "Sho"
const reactElement = React.createElement(
  'a',
  {href: 'https://google.com', target: '_blank'},
  'Click me to visit google ok ',
  user,
  'a'
  
)

const anotherElement = (
  <a href="https:://google.com">visit</a>
)

createRoot(document.getElementById('root')).render(
  <App2/>
)
