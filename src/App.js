
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About/About';
import Contact from './Pages/Contacts/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

 

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   
  );
}

export default App;
