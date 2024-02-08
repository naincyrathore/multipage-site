import './App.css';
import { BrowserRouter, Route, Routes, Redirect, Switch, Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Article from './components/Article';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <nav>
            <h1>My Article</h1>
            <NavLink exact to="/">Home</NavLink>
            <NavLink to="/contact">Contact</NavLink>
            <NavLink to="/about">About</NavLink>
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
            <Route path='/articles/:id'>
              <Article/>
            </Route>
            <Route path='*'>
              <Redirect to='/' />
            </Route>
          </Switch>
      </div>
    </BrowserRouter>
    
  ); 
}

export default App;
