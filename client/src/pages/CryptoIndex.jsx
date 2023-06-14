import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbarchild from '../components/combocoin/Navbarchild';
import CryptoHome from '../pages/coinpages/CryptoHome';
import CryptoDetail from '../pages/coinpages/CryptoDetail';




const CryptoIndex = () => {
  

  return (
    <>
      <Navbarchild/>
      <Routes>
        <Route path="/" element={<CryptoHome />} />
        <Route path="/coin/:id" element={<CryptoDetail />} />
      </Routes>
    </>
  )
}

export default CryptoIndex