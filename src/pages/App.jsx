import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from '../components/Header/Header';
import Main from '../components/Main';
import Sidebar from '../components/Sidebar';
import { StyledMainContenWrapper } from './App.style';
import SignUp from './Auth/SignUp';
import SignIn from './Auth/SignuIn';
import Welcome from './Welcome/Welcome';

export default function App() {
  const [isRed, setIsRed] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({
    id: null,
    username: '',
    email: ''
  });

  if (isLogged) {
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
  return (
    <>

      <Routes>
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="*" element={<Welcome />} />
      </Routes>
    </>

  )
}
