import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Topics Covered</h1>
      <p>The Following is a list of all the topics we cover in the MDN learning area.</p>
      <div class="content">
        <h3>Getting started with the web</h3>
        <p>Provides a practical introduction to web development for complete beginners.</p>
      </div>
      <div class="content">
        <h3>HTML — Structuring the web</h3>
        <p>HTML is the language that we use to structure the different parts of our content  <br />and define what their meaning or purpose is. This topic teaches HTML in detail.</p>
      </div>
      <div class="content">
        <h3>CSS — Styling the web</h3>
        <p>CSS is the language that we use to control our web content's style and layout, as <br /> well as adding behavior like animation. This topic provides comprehensive <br /> coverage of CSS.</p>
      </div>
    </>
  )
}

export default App
