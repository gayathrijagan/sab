import './App.scss';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import Home from './components/home/Home';
import About from './components/about/About';
import Menu from './components/menu/Menu';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      {/* <TopBanner /> */}
      <Router>
        <div className='appContainer'>
          <NavBar />
          <div>
            <Routes>
              <Route path='/' Component={Home} />
              <Route path='/about' Component={About} />
              <Route path='/menu' Component={Menu} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
