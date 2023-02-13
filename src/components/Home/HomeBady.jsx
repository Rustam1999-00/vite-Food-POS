import React from 'react'
import { HomeBadyDB } from '../../../data/db'
import Header from './Header'
import { CardWrapper,CardList,CardItem,CardName,CardImg,CardText,CardSrtong} from './HomeBadyStyled'
export const HomeBady = () => {
  return (
    <CardWrapper>
      <CardList>
        {
          HomeBadyDB.map((card)=>(
            <CardItem>
              <CardImg src={card.img} alt="" width="132 " height="132" />
              <CardName>{card.name}</CardName>
              <CardSrtong>{card.prise}</CardSrtong>
              <CardText>{card.boslow}</CardText>
            </CardItem>
          ))
        }
      </CardList>
    </CardWrapper>
  )
}

// export default HomeBady
