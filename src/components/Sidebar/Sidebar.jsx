import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { SidebarImg } from '../../../data/db'
import { SidebarWrapper,SidebarList,SidebarItem } from './SidebarStyled'
import home from '../../assets/images/SidebarImg/Menu-home.svg'


 const Sidebar = () => {
  return (
    <SidebarWrapper>
        <SidebarList>
            {
                SidebarImg.map((menu)=>(
                    <SidebarItem  className={ `${menu.img == home ? ` bg-secondary  bg-opacity-50 `:''} `}>
                        <NavLink className={({isActive})=> isActive ? `${menu.img === home ? '':''} `:'vrg'} to={'/HomeBady'}>
                            <img src={menu.img} width='56' height='56' alt='Sidebar' />
                        </NavLink>
                    </SidebarItem>
                ))
            }
        </SidebarList>
    </SidebarWrapper>
  )
}
export default Sidebar

