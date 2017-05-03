import styleable from 'react-styleable'
import React from 'react'

import css from './button.css'
import html from './button.html'

const Button = props => {
  return html(props)
}

export default styleable(css)(Button)
