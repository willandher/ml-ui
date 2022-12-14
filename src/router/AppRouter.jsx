import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { DetailBuy } from '../components/organisms/DetailBuy'
import { Profile } from '../pages/profile/Profile'
import { CardBuy } from '../pages/purcharse/CardBuy'

export const AppRouter = () => {
  return (
    <>
    <Routes>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/' element={<CardBuy/>}/>
        <Route path='/buy-detail' element={<DetailBuy/>}/>
    </Routes>
    </>
  )
}
