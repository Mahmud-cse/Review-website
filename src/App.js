import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header'
import Home from './components/Home/Home';
import Service from './components/Service/Service';
import About from './components/About/About';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar'
import News from './components/News/News';

function App() {
  return (
    <div>
        <Router>
          <NavBar />
          <Header />
        <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/service">
              <Service />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
