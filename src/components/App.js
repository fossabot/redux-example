import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import TodoApp from './TodoApp'
import Counter from '../containers/Counter'

const About = ({ match }) => (
  <h1>Hello {match.url} </h1>
)

const App = () => (
  <div>
    <Router>
      <div className="container">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
        <Route exact path="/" component={TodoApp} />
        <Route path="/about" component={About} />
        <Route path="/counter" component={Counter} />
      </div>
    </Router>
  </div>
)

export default App;
