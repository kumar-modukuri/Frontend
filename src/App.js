import { useState } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Details from './pages/Details';
import Home from './pages/Home';

function App() {
  const [search,setSearch] = useState("");

  const handleSearched = (data) => {
    setSearch(data);
  }

  return (
    <div className="App">
      <HashRouter>
        <Navbar searched={handleSearched}/>
        <div className="pages">
          <Routes>
            <Route exact path="/" element={<Home searchedEmp={search}/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/:id" element={<Details />}/>
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;