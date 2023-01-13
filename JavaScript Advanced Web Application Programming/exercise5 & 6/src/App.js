import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import SearchParams from './SearchParams'
import WrappedDetails from './Details'
import { Cart } from './Cart'
import { GlobalProvider } from './context/GlobalState'

const App = () => {
  return (
    <div>
    <GlobalProvider>

    <Router>
      <Routes>
        <Route path="/:sport/:league/:id/" element={<WrappedDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<SearchParams />} />
      </Routes>
    </Router>
    </GlobalProvider>
    </div>
  )
}

// render(React.createElement(App), document.getElementById("root"));
render(<App />, document.getElementById('root'))
