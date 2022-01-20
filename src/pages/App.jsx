import React, { Suspense, useState, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledMainContenWrapper } from './App.style';

const Header = lazy(() => import('../components/Header/Header'));
const Main = lazy(() => import('../components/Main'));
const Sidebar = lazy(() => import('../components/Sidebar'));
const SignUp = lazy(() => import('./Auth/SignUp'));
const SignIn = lazy(() => import('./Auth/SignIn'));
const Welcome = lazy(() => import('./Welcome/Welcome'));

export default function App() {
  const user = JSON.parse(localStorage.user || "{}");
  const token = localStorage.token;

  if (token && user?.id) {
    return (
      <Suspense fallback="Loading...">
        <div>
          <Header />
          <StyledMainContenWrapper>
            <Sidebar />
            <Main />
          </StyledMainContenWrapper>
        </div>
      </Suspense>
    )
  }
  return (
    <>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </Suspense>
    </>
  )
}
