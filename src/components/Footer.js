import React from 'react'
import { Link } from 'react-router-dom'

const Footer = ({ basePath }) => {
  const routerLinks = (
    <p>
      Show:
    {' '}
      <Link to={basePath}>All</Link>
      {', '}
      <Link to={`${basePath}/active`}>Active</Link>
      {', '}
      <Link to={`${basePath}/completed`}>Completed</Link>
      {', '}
      <Link to={`${basePath}/removed`}>Removed</Link>
    </p>
  )
  return routerLinks
}

export default Footer