import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './styles/global.css'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { NotFound } from './components/NotFound'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Feed } from './pages/Feed'
import { Management } from './pages/Management'
import { Register } from './pages/Register'
import { Login } from './pages/Login'
import { Prayer } from './pages/Prayer'
import { Groups } from './pages/Groups'
import { NewPost } from './pages/NewPost'
import { Messages } from './pages/Messages'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/management" element={<Management />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/feed" element={<Feed />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/prayer" element={<Prayer />}></Route>
        <Route path="/groups" element={<Groups />}></Route>
        <Route path="/newpost" element={<NewPost />}></Route>
        <Route path="/messages" element={<Messages />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
)
