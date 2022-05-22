import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/Search/Search'
import Question from './pages/Question/Question'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/create">
        <Create />
      </Route>
       <Route path="/search">
         <Search />
       </Route>
       <Route path="/questions/:id">
        <Question />
       </Route>
      </BrowserRouter>
    </div>
  )
}

export default App
