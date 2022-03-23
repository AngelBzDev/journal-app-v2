import React from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import JournalScreen from '../components/journal/JournalScreen'
import AuthRouter from './AuthRouter'

const AppRouter = () => {
  return (
    <div className='w-11/12 mx-auto max-w-7xl font-montse'>
      <BrowserRouter>
        <Routes>
          <Route path='/auth/*' element={<AuthRouter />}/>
          <Route path='/' element={<JournalScreen />}/>
          <Route path='*' element={<Navigate to='/auth/login' />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default AppRouter