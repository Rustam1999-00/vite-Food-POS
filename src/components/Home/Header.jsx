import React from 'react'
import Search from '../../assets/images/Form Elements/Textfield/Icon/Fill/search.svg'
import { HeaderAllWapper, HeaderWrapper, Titlewrapper, Formwrapper, FormInput, HeaderTitle, HeaderSpan, HeaderLinkList, HeaderLinkItem, HeaderLinkTitle, HeaderSelectwraper, SelektTitle, HeaderSelekt } from './HeaderStyled'
import { NavLink } from 'react-router-dom'
import { HeaderDB } from '../../../data/db'
import{ HomeBady} from './HomeBady'
import { Routes, Route } from 'react-router-dom'


function Header() {
  return (

    <HeaderAllWapper>
      <HeaderWrapper>
        <Titlewrapper>
          <HeaderTitle>
            Jaegar Resto
          </HeaderTitle>
          <HeaderSpan>
            Tuesday, 2 Feb 2021
          </HeaderSpan>
        </Titlewrapper>
        <Formwrapper >
          <img src={Search} alt="Search" width='15' height='15' />
          <FormInput type='search' placeholder='Search for food, coffe, etc..' />
        </Formwrapper>
      </HeaderWrapper>

      <HeaderLinkList>
        {
          HeaderDB.map((HaderLink) => (
            <HeaderLinkItem>
              <NavLink className={({ isActive }) => isActive ? 'text-warning pb-2' : 'text-light text-decoration-none'} to={`${HaderLink.name === 'Hot Dishes' ? '/HomeBady': '/'}`} >
                <HeaderLinkTitle>
                  {HaderLink.name}
                </HeaderLinkTitle>
              </NavLink>
            </HeaderLinkItem>
          ))
        }
      </HeaderLinkList>
      <HeaderSelectwraper>
        <SelektTitle>
          Choose Dishes
        </SelektTitle>
        <HeaderSelekt>
          <option>Dine In</option>
          <option>Dine In</option>
          <option>Dine In</option>
          <option>Dine In</option>
          <option>Dine In</option>
          <option>Dine In</option>
        </HeaderSelekt>
      </HeaderSelectwraper>
      <Routes>
        <Route path="/HomeBady" element={<HomeBady />} />
      </Routes>


    </HeaderAllWapper>

  )
}

export default Header
