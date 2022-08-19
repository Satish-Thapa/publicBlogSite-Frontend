import './App.css';
import Footer from './Components/Footer';
import Logo from './Components/Logo';

import Navbar from './Components/Navbar';

import Posts from './Components/Posts';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Logo/>
      <Posts/>
      <Footer/>
    </div>
  );
}

export default App;
