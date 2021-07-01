import './App.css';
import NavBar from './components/Navbar'
import Footer from './components/Footer'
import GridText from './components/Grid';
import Login from './components/Login';



function App() {
  return (
    <>
      <Login/>
      <NavBar/>
        <GridText/>
      <Footer/>
</>
  );
}

export default App;
