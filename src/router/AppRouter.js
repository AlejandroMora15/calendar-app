import React from 'react'
import { Navigate, Route, BrowserRouter, Routes } from 'react-router-dom'
import { LoginScreen } from '../components/auth/LoginScreen'
import { CalendarScreen } from '../components/calendar/CalendarScreen'

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path='/login' element={ <LoginScreen /> } />
                    <Route path='/' element={ <CalendarScreen /> } />
                    <Route path='*' element={<Navigate replace to='/' /> } />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
