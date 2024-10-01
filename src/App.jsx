import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';

function App() {
  const [color,setcolor] = useState("black")

  //  function setcolor (color) {
  //   setcolor(color);
   

  
  return (
    <>
    <h2 className="border border-dark bg-dark text-light">Background color changing project</h2>
     <div className='container-fluid vh-100  vw-100 d-flex justify-align-center align-items-center px-auto'style={{backgroundColor:color }}>
      <div className='row p-5 '>
        <div className='col  '>
          <button  className='btn btn-danger 'onClick={()=>setcolor("red")} >Red</button> {""}
         < button className='btn btn-success text-dark'onClick={()=>setcolor("Green")}>Green</button>{""}
          <button className='btn btn-warning text-dark'onClick={()=>setcolor("Yellow")}>Yellow</button>{""}
          <button className='btn btn-primary text-dark 'onClick={()=>setcolor("Blue")}>Blue</button>{""}
          <button className='btn btn-secondary text-dark'onClick={()=>setcolor("Grey")}>Grey</button>{""}
          <button className='btn btn-light text-dark'onClick={()=>setcolor("White")}>White</button>{""}



        </div>

      </div>

     </div>
    </>
  )
}

export default App
