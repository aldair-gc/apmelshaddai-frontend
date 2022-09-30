import { Routes, Route } from 'react-router-dom';

import Private from './private';

import { Home } from '../pages/Home'
import { Contact } from '../pages/Contact'
import { NotFound } from '../components/NotFound'
import Feed from '../pages/Feed'
import { Management } from '../pages/Management'
import { Register } from '../pages/Register'
import { Login } from '../pages/Login'
import { Prayer } from '../pages/Prayer'
import { Groups } from '../pages/Groups'
import NewPost from '../pages/NewPost'
import { Messages } from '../pages/Messages'
import EditPost from '../pages/EditPost';


export default function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/feed" element={<Feed />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/prayer" element={<Prayer />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/" element={<Private />}>
        <Route path="management" element={<Management />}></Route>
        <Route path="newpost" element={<NewPost />}></Route>
        <Route path="groups" element={<Groups />}></Route>
        <Route path="editpost/:id" element={<EditPost />}></Route>
        <Route path="messages" element={<Messages />}></Route>
      </Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
}
