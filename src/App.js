import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;