import { StaticRouter, Route } from 'react-router-dom'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Home from './home'
import About from './about'

export default (locals) => {
  return ReactDOMServer.renderToStaticMarkup(
    <StaticRouter location={locals.path} context={{}}>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </div>
    </StaticRouter>
  )
}



