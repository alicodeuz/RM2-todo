import React, { Suspense, useState, lazy, createContext } from 'react';
import { Route, Routes } from 'react-router-dom';
import { StyledMainContenWrapper } from './App.style';
import AppContext from '../context/AppContext';

const Header = lazy(() => import('../components/Header/Header'));
const Main = lazy(() => import('../components/Main'));
const Sidebar = lazy(() => import('../components/Sidebar'));
const SignUp = lazy(() => import('./Auth/SignUp'));
const SignIn = lazy(() => import('./Auth/SignIn'));
const Welcome = lazy(() => import('./Welcome/Welcome'));

export default function App() {
  const [auth, setAuth] = useState(() => ({
    user: JSON.parse(localStorage.user || "{}"),
    token: localStorage.token
  }));

  const { token, user } = auth;

  const signOut = () => {
    try {
      setAuth({});
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    } catch (error) {
      console.log(error)
    }
  }

  if (token && user?.id) {
    return (
      <AppContext.Provider value={{ user, token, signOut }}>
        <Suspense fallback="Loading...">
          <div>
            <Header user={user} />
            <StyledMainContenWrapper>
              <Sidebar />
              <Main />
            </StyledMainContenWrapper>
          </div>
        </Suspense>
      </AppContext.Provider>
    )
  };

  return (
    <>
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/sign-in" element={<SignIn updateAuthData={setAuth} />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<Welcome />} />
        </Routes>
      </Suspense>
    </>
  )
}
