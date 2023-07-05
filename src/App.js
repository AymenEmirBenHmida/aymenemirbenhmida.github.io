import logo from './logo.svg';
import './App.css';
import CNavbar from './components/navbar/CNavbar.js';
import Banner from './components/Banner/Banner';
import Skills from './components/Carousel/Carousel';
import Projects from './components/Projects/Projects';
import CFooter from './components/Footer/CFooter';
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <div className="App">
      <CNavbar/>
      <Banner />
      <Projects />
      <CFooter />
    </div>
  );
}

export default App;
