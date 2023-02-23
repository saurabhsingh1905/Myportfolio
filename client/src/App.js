
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Project from './components/Project'
import Footer from './components/Footer'
import Error from './components/Error'
import { Routes,Route } from 'react-router-dom';


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/project' element={<Project/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    <Footer/>
    </>
  );

  }

export default App;
