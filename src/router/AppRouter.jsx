import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CardBuy } from '../components/organisms/CardBuy'
import { DetailBuy } from '../components/organisms/DetailBuy'
import { Profile } from '../components/organisms/Profile'

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
