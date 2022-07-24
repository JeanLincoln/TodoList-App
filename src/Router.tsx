import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './Layouts/index' 
import { Home } from './Pages/Home' 
import { TasksDone } from './Pages/TasksDones' 


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/TasksDone" element={<TasksDone />} />
      </Route>
    </Routes>
  )
}