import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path='/home' element={<Home/>}/>
          <Route path='/add' element={<Add/>}/>
        </Routes>
      
      
    </div>
  );
}

export default App;
