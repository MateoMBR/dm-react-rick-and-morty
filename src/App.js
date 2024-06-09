// _____           __  __ _          
// |  __ \         |  \/  | |         
// | |__) |_____  _| \  / | |__  _ __ 
// |  _  // _ \ \/ / |\/| | '_ \| '__|
// | | \ \  __/>  <| |  | | |_) | |   
// |_|  \_\___/_/\_\_|  |_|_.__/|_|   
                                   

import React from 'react';
import { BrowserRouter as Router, 
Routes,
Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import CharacterList from './pages/CharacterList';
import CharacterDetail from './pages/CharacterDetail';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/character-list" element={<CharacterList/>}/>
          <Route path="/character/:id" element={<CharacterDetail/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      <Footer />
      </Router>
    </div>
  );
}

export default App;



                                   

