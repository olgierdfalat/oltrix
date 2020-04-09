import React from 'react'
import App from './views/App'

import { render } from 'react-dom'

render(<App />, document.getElementById('root'))

if (module.hot) {
  module.hot.accept()
}
