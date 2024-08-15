import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import SignIn from './pages/SignIn'
import CreatePost from './pages/CreatePost'
import Header from './components/Header'
import FooterComponent from './components/Footer'
import PrivateRoute from './components/PrivateRoute'
import Admin from './components/Admin'
import UpdatePost from './pages/UpadtePost'

export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/projects' element={<Projects />} />
        <Route element={<PrivateRoute />}>
          <Route path='/dashboard' element={<Dashboard />} />
        </Route>
        <Route element={<Admin />}>
          <Route path='/create-post' element={<CreatePost />} />
          <Route path='/update-post/:id' element={<UpdatePost />} />
        </Route>
      </Routes>
      <FooterComponent/>
    </BrowserRouter>
  )
}