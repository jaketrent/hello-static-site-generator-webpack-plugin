import React from 'react'

export default props =>
  <html>
    <head>
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      <div>
        {props.children}
      </div>
      <script src="/index.js"></script>
      <script src="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/highlight.min.js"></script>
      <link rel="stylesheet" href="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.9.0/styles/atom-one-dark.min.css" type="text/css" media="all" />
      <script>hljs.initHighlightingOnLoad();</script>
    </body>
  </html>
