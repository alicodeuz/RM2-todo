import React, { useState } from 'react'
import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar';

export default function App() {
  const [isRed, setIsRed] = useState(false);
  return (
    <div>
      <Header />
    </div>
  )
}
