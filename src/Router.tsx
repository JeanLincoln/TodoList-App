import { useContext } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthContext } from './Contexts/AuthContext'
import { DefaultLayout } from './Layouts/index'
import { Auth } from './Pages/Auth'
import { Home } from './Pages/Home'
import { TasksDones } from './Pages/TasksDones'

export function Router() {
  const { user } = useContext(AuthContext)
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={user ? <Home /> : <Navigate to="/auth" />} />
        <Route
          path="/TasksDones"
          element={user ? <TasksDones /> : <Navigate to="/auth" />}
        />
      </Route>
    </Routes>
  )
}
