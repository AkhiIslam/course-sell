import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import NotFound from './Components/NotFound/NotFound';
import Courses from './Components/Courses/Courses';
import About from './Components/About/About';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contact from './Components/Contact/Contact';



function App() {

  return (
    <div>

      <Router>

        <Header></Header>

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

          <Route path="/courses">
            <Courses></Courses>
          </Route>

          <Route path="/contact">
            <Contact></Contact>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>

        </Switch>

        <Footer></Footer>

      </Router>

    </div>
  );
}

export default App;
