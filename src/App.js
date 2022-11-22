import './App.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";


function App() {
    return (
        <div className="App">
            <Router>
                <Header/>
                <Routes>
                    <Route exact path="/submission-portfolio/" element={<About/>}/>
                    <Route exact path="/" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>}/>
                    <Route path="/portfolio" element={<Portfolio/>}/>
                    <Route path="/resume" element={<Resume/>}/>
                </Routes>
            </Router>
            <Footer/>
        </div>
    );
}

export default App;
