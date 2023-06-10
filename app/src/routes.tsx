import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import  PostsPages  from './pages/PagePosts'
import CreateAccount from './pages/CreateAccount'
import  PageNotFound  from './pages/PageNotFound'
import ComentsPage from './pages/ComentsPage'


export function AppRoutes() {
  return (

    <Routes>
      <Route path={RoutesPaths.mainPage} element={<MainPage/>}/>
      <Route path={RoutesPaths.createAccountPages} element={<CreateAccount />}/>
      <Route path={RoutesPaths.postsPages} element={<PostsPages/>}/>
      <Route path={RoutesPaths.comentsPage} element={<ComentsPage/>}/>
      <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}

interface Routes{
  mainPage:string,
  postsPages:string,
  createAccountPages:string,
  comentsPage:string
}

export const RoutesPaths:Routes  = {
  mainPage:'/',
  postsPages:"/posts",
  createAccountPages:'/createaccount',
  comentsPage:'/coments'

}
