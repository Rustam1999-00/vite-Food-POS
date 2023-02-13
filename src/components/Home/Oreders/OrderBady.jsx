import {HomeBadyDB} from "../../../../data/db"
import {ItemContent,ItemnameWrapper,ItemText,ItemSpan,ItemButton,ItemStrong,ItemForm,ItemInput,ItemDelete,Item} from "./OrderBadyStyled"
import Delete from '../../../assets/images/HomeBody/Content/ButtonDelete.svg'


import React from 'react'

const OrderBady = () => {
  return (
    <div>
      <ul>
        {
HomeBadyDB.map((OrderDb)=>(
    <Item>
        <ItemContent>
            <img src={OrderDb.img} width="45" height='45' alt={OrderDb.name}/>
            <ItemnameWrapper>
                <ItemText>{OrderDb.name}</ItemText>
                <ItemSpan>{OrderDb.prise}</ItemSpan>

            </ItemnameWrapper>
            <ItemButton>{OrderDb.name === 'Spicy seasoned seafood noodles' ? 2 :OrderDb.name === 'Salted Pasta with mushroom sauce' ? 1 :OrderDb.name === 'Beef dumpling in hot and sour soup' ? 3 : OrderDb.name === 'Healthy noodle with spinach leaf' ? 1 :2}</ItemButton>
            <ItemStrong>{OrderDb.name === 'Spicy seasoned seafood noodles' ? "$ 4.58 ":OrderDb.name === 'Salted Pasta with mushroom sauce' ? "$ 2.68" :OrderDb.name === 'Beef dumpling in hot and sour soup' ? "$ 10.47 " : OrderDb.name === 'Healthy noodle with spinach leaf' ? "$ 3.29 " :"$ 5.42"}</ItemStrong>
        </ItemContent>
            <ItemForm>
              <ItemInput type='text' placeholder="Please, just a little bit spicy only."/>
              <ItemDelete type="button">
              <img src={Delete} width='48' height='48' alt="Delete"/>
              </ItemDelete>
            </ItemForm>
    </Item>
))


        }
      </ul>
    </div>
  )
}

export default OrderBady
