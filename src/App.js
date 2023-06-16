import Dashboard1 from './components/Dashboard';
import Services from './components/Services';
import Banner from './components/Banner';
import Illustration from './components/Illustration';
import Reference from './components/References';
import Contact from './components/ContactUs';
import Products from './components/Product';
import './App.css';

function App() {
  return (
    <div className="App">
      <Dashboard1 />
      <Services />
      <Banner />
      <Illustration />
      <Reference />
      <Contact />
      <Products />
    </div>
  );
}

export default App;
