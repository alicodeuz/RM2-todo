import React, { useContext } from 'react'
import { StyledHeader } from './Header.style';
import { CgMenuGridO } from 'react-icons/cg';
import { IoSettingsOutline } from 'react-icons/io5'
import { BiQuestionMark } from 'react-icons/bi'
import { AiOutlineNotification, AiOutlinePoweroff, AiOutlineUser } from 'react-icons/ai'
import { pxToRem } from '../../utils';
import AppContext from '../../context/AppContext';
import { COLORS } from '../../constants';

export default function Header() {
  const context = useContext(AppContext);
  console.log(context)

  return (
    <StyledHeader>
      <div className='grid-wrapper'>
        <CgMenuGridO color='#fff' size={pxToRem(24)} title='grid' />
        <h3>Todo</h3>
      </div>

      <div className="header-input">
        <input type="text" />
      </div>
      <div className="header-action">
        <button><IoSettingsOutline color="#fff" size={pxToRem(24)} /></button>
        <button><BiQuestionMark color="#fff" size={pxToRem(24)} /></button>
        <button className='header-notifications'>
          <span>{0}</span>
          <AiOutlineNotification color="#fff" size={pxToRem(24)} />
        </button>
        <button className='header-profile'><AiOutlineUser color="#fff" size={pxToRem(24)} /></button>
        <button className='header-profile' onClick={() => context.signOut()}>
          <AiOutlinePoweroff color={COLORS.red} size={pxToRem(24)} />
        </button>
      </div>
    </StyledHeader>
  )
}
