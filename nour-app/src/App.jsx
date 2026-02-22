import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const courseTitle="Advanced Web Dev"
function App() {
  const studentName="Nawara";{/*It showed Nawara instead of Nour Hlel*/}
  const student={name:"Nour", age:"20", track:"Finance"}; {/*JSX can't render the whole object. The screen showed nothing when i typed student between curly braces*/}
  return(
    <div>
      <h1> Nour created her first react component </h1>
      <p1> My name is {studentName}</p1> {/* when I removed the curly braces, it showed studentName instead of Nour Hlel. JSX caanot read without curly braces.*/}
      <p2> In the second semester, I study {courseTitle}</p2> {/* we can insert variables between curly braces*/}
      <label htmlFor="studentName"> Write your name here please! </label>
      <input type="text" id="studentName"/> {/*For is a reserved for JavaScript. We use htmlFor in React*/}
    </div>
  )
}
  

export default App
