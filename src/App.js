
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services'
import NotFound from './Components/NotFound/NotFound';
import Navber from './Components/Navbar/Navber';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">

   <Router>
     <Navber></Navber>
     <Switch>
      <Route exact path="/">
      <Home></Home>
      </Route>
      <Route path="/home">
        <Home></Home>
      </Route>
      <Route path="/about">
        <About></About>
      </Route>
      <Route path="/contact">
        <Contact></Contact>
      </Route>
      <Route path="/services">
        <Services></Services>
      </Route>
      <Route exact path="/*">
        <NotFound></NotFound>
      </Route>
     </Switch>
     <Footer></Footer>
     
   </Router>

    </div>
  );
}

export default App;
