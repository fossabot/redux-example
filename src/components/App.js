import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import TodoApp from './TodoApp'
import Counter from '../containers/Counter'

const About = ({ match }) => (
  <h1>Hello {match.url} </h1>
)
About.propTypes = {
  match: PropTypes.object.isRequired
}

const App = () => {
  const nav = (
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/todo">Todo</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/counter">Counter</Link></li>
    </ul>
  )
  return (
    <div>
      <Router>
        <div className="container">
          {nav}
          <Route exact path="/" component={() => <h1>Welcome to Redux App</h1>} />
          <Route path="/todo" component={TodoApp} />
          <Route path="/about" component={About} />
          <Route path="/counter" component={Counter} />
        </div>
      </Router>
    </div>
  )
}

export default App
