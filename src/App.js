import { HashRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              exact path="/"
              element={<Home />}
            />
            <Route
              path="/about"
              element={<About />}
            />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;