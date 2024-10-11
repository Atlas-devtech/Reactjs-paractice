import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-dev-runtime"
import App from './App.jsx'



// const ReactElement = {
//   type : "a",
//   props: {
//       href:"http://google.com",
//       target: "_blank"
//   },
//   children:'click me to visit google'
// }

const AnotherElement = ( 
  <a href="http://www.google.com" target='_blank'>visit google</a>
)
const anotheruser = "react paractice"

const reactElement = React.createElement(
  "a",
  {href: "https://www.google.com", target: "_blank"},
  "click me to visit google",
  anotheruser
)





ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    {/* <ReactElement/>   its not working */}

    <App />
      // reactElement
    // AnotherElement     its working
  // </React.StrictMode>,
)
