import './App.css'
import { BrowserRouter,  Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Search from './pages/Search/Search'
import Question from './pages/Question/Question'
import Navbar from './components/Navbar'
import { useMode } from './hooks/useMode'
import ModeSelector from './components/ModeSelector'

function App() {
  const { mode } = useMode()
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
      <Navbar />
      <ModeSelector />
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
