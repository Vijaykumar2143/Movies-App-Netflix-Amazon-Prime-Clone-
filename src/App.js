import {Switch, Route} from 'react-router-dom'

import ProtectedRoute from './components/ProtectedRoute'
import Home from './components/Home'
import Login from './components/Login'
import Popular from './components/Popular'
import Search from './components/Search'
import MovieDetails from './components/MovieDetails'
import Account from './components/Account'
import NotFound from './components/NotFound'

import './App.css'

const App = () => (
  <div className="main-container">
    <Switch>
      <Route path="/login" exact component={Login} />
      <ProtectedRoute path="/" exact component={Home} />
      <ProtectedRoute path="/popular" exact component={Popular} />
      <ProtectedRoute path="/search" exact component={Search} />
      <ProtectedRoute path="/account" exact component={Account} />
      <ProtectedRoute path="/movies/:id" exact component={MovieDetails} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
