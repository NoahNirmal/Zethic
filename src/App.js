import './App.css';
import { Business } from './components/Business';
import { Clients } from './components/Clients';
import { Collection } from './components/Collection';
import { Contact } from './components/Contact';
import { Discover } from './components/Discover';
import { Feature } from './components/Feature';
import { Footer } from './components/Footer';
import { Highlights } from './components/Highlights';
import { Navbar } from './components/Navbar';
import { Project } from './components/Project';

function App() {
  return (
    <div className="app">
      <Navbar />
      <Discover />
      <Business />
      <Collection />
      <Project />
      <Feature />
      <Highlights />
      <Clients />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
