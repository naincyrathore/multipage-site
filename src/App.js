import './App.css';
import { BrowserRouter, Route, Routes, Switch, Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <nav>
            <h1>My Article</h1>
            <Link exact to="/">Home</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/about">About</Link>
          </nav>

          <Switch>
            {console.log("inside switch")}
            <Route exact path="/">
              {console.log('Rendering Home')}
              <Home/>
            </Route>
            <Route path="/contact">
              {console.log('Rendering Contact')}
              <Contact/>
            </Route>
            <Route path="/about">
              {console.log('Rendering About')}
              <About/>
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
    
  ); 
}

export default App;
