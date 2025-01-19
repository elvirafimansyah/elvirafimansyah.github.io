// Importing styles
import './styles/index.css';

// Importing required components and dependencies
import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/nav/Navbar';
import Home from './pages/Home';
import About from './pages/about/About';
import Projects from './pages/projects/Project';
import Blog from './pages/blog/Blog';
import BlogItem from './pages/blog/BlogItem/BlogItem';
import Contact from './pages/Contact';
import Footer from './components/Footer';

// Main App component
function App() {
  // Using React Fragments for cleaner JSX structure
  return (
    <>
      {/* Navbar component for navigation */}
      <NavBar />

      {/* React Router for defining routes */}
      <Routes>
        {/* Home route */}
        <Route exact path='/' element={<Home />} />

        {/* About route */}
        <Route path="/about" element={<About />} />

        {/* Projects route */}
        <Route path="/projects" element={<Projects />} />

        {/* Blog route */}
        <Route path="/blog/" element={<Blog />} />

        {/* BlogItem route with dynamic parameter (:id) */}
        <Route path="/blog/:id" element={<BlogItem />} />

        {/* Contact route */}
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Footer component for the page footer */}
      <Footer />
    </>
  );
}

// Exporting the App component
export default App;

