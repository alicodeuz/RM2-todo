import React from 'react'
import { NavLink } from 'react-router-dom';
import { VscMenu, VscCalendar } from 'react-icons/vsc';
import { BsStar, BsSun } from 'react-icons/bs';
import { IoHomeOutline } from 'react-icons/io5';
import { AiOutlineUser } from 'react-icons/ai';
import { pxToRem } from '../../utils';
import { StyledSidebar } from './Sidebar.styles';

const MENU_LIST = [
  {
    title: 'My Day',
    path: '/my-day',
    icon: <BsSun />
  },
  {
    title: 'Important',
    path: '/important',
    icon: <BsStar />
  },
  {
    title: 'Planned',
    path: '/planned',
    icon: <VscCalendar />
  },
  {
    title: 'Assigned to me',
    path: '/assigned-to-me',
    icon: <AiOutlineUser />
  },
  {
    title: 'Tasks',
    path: '/tasks',
    icon: <IoHomeOutline />
  },
]
const FOOTER_MENU_LIST = [
  {
    title: 'My Day',
    path: '#/my-day',
    icon: <BsSun />
  },
  {
    title: 'Important',
    path: '#/important',
    icon: <BsStar />
  },
  {
    title: 'Planned',
    path: '#/planned',
    icon: <VscCalendar />
  },
  {
    title: 'Assigned to me',
    path: '#/assigned-to-me',
    icon: <AiOutlineUser />
  },
  {
    title: 'Tasks',
    path: '#/tasks',
    icon: <IoHomeOutline />
  },
]
export default function Sidebar() {
  return (
    <StyledSidebar>
      <div>
        <button><VscMenu size={pxToRem(24)} color='#fff' /> </button>
      </div>
      <div className='menu-list'>
        {
          MENU_LIST.map(item => {
            return (
              <NavLink to={item.path} className="menu-list-item" key={item.title}>
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            )
          })
        }
      </div>
      <div className='menu-list footer-menu'>
        {
          FOOTER_MENU_LIST.map(item => {
            return (
              <NavLink to={item.path} className="menu-list-item" key={item.title}>
                {item.icon}
                <span>{item.title}</span>
              </NavLink>
            )
          })
        }
      </div>
    </StyledSidebar>
  )
}
