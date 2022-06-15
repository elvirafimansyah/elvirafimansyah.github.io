import './lib/index.css'
import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/nav/Navbar'
import Home from './pages/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Project';
import Blog from './pages/blog/Blog';
import Contact from './pages/Contact';
import Footer from './components/Footer';
function App() {
  return (  
    <>
      <NavBar />
      <Routes >
        <Route path='/' element={<Home />}/>
        <Route path="about" element={<About />} />
        <Route path="projects" element={<Projects />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
