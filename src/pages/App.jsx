import React, { useState } from 'react'
import Header from '../components/Header/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { StyledMainContenWrapper } from './App.style';

export default function App() {
  const [isRed, setIsRed] = useState(false);
  return (
    <div>
      <Header />
      <StyledMainContenWrapper>
        <Sidebar />
        <Main />
      </StyledMainContenWrapper>
    </div>
  )
}
