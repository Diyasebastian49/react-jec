import { Routes,Route,Link,BrowserRouter} from 'react-router-dom'
import HomePage from './components/HomePage'
import AboutPage from './components/AboutPage'





const App = () => {
  return (
    <>
    <BrowserRouter>
    <nav>
      <Link to="/">Home|</Link>
      <Link to="/about|">About</Link>
      <Link to="/contact">Contact</Link>
    </nav>

    <Routes>
      <Route path="/"elements={<HomePage</HomePage>} />
      <Route path="/about" element={<AboutPage</BrowserRouter>
    </Routes>
    </>
  )
}

export default App