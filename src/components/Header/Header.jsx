import React from 'react'
import { StyledHeader } from './Header.style';

export default function Header() {
  return (
    <StyledHeader>
      <div></div>
      <h3>Todo</h3>
      <div className="header-input">
        <input type="text" />
      </div>
      <div className="header-action">
        <h5>Icon1</h5>
        <h5>Icon1</h5>
        <h5>Icon1</h5>
        <h5>Icon1</h5>
      </div>
    </StyledHeader>
  )
}
