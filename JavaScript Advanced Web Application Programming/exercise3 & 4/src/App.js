import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import SearchParams from './SearchParams'
import WrappedDetails from './Details'

const App = () => {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/:sport/:league/:id/" element={<WrappedDetails />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </Router>
    </div>
  )
}

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById('root'))
