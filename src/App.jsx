import './App.css'
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Contacts from './Components/Contacts'
import About from './Components/About'
import Home from './Components/Home'

function App() {
  return (
   <div>
   <nav>
   <ul>
     <li>
       <Link to="/">Home</Link>
     </li>
     <li>
       <Link to="/about">About</Link>
     </li>
     <li>
       <Link to="/contacts">Contacts</Link>
     </li>
   </ul>
 </nav>

     <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/contacts' element= {<Contacts/>}/>

     </Routes>
   </div>
  )
}

export default App
