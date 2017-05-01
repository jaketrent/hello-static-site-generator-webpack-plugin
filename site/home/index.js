import { Link } from 'react-router-dom'
import React from 'react'

export default () =>
  <div>
  <Link to="/">Home</Link>
  <Link to="/components/button">Component: Button</Link>
  <Link to="/about">About link</Link>
  <br />
  Awesome Home
</div>
