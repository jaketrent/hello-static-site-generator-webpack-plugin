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
    </body>
  </html>
