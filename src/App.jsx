import { Routes, Route} from 'react-router-dom';

// Component
import NavbarComponents from './components/NavbarComponents';
import FooterComponents from './components/FooterComponents';

// Pages
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';
import TestiPage from './pages/TestiPage';
import ProjectPage from './pages/ProjectPage';

function App() {
  return <div>
    <NavbarComponents/>

    <Routes>
      <Route path='/' Component={LandingPage} />
      <Route path='/contact' Component={ContactPage} />
      <Route path='/testimonial' Component={TestiPage} />
      <Route path='/project' Component={ProjectPage} />
    </Routes>

    <FooterComponents/>
  </div>
}

export default App
