import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ToDos from '../ToDos'
import { StyledMain } from './Main.style'

export default function Main({ user }) {
  return (
    <StyledMain>
      <Routes>
        <Route index path="/:name" element={<ToDos />} />
      </Routes>
    </StyledMain>
  )
}
