import styled from "styled-components";





export const CardWrapper =styled.div`

width: 633px;
`
export const CardList =styled.ul`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 0;
padding: 0;

list-style: none;
left: -14px;

`
export const CardItem =styled.li`
align-items: center;
position: relative;

background: #1F1D2B;
border-radius: 16px;
width: 192px;
height: auto;
padding: 0 30px 30px 30px;
padding-top: 114px;
margin: 27px 0;

`
export const CardName =styled.p`
font-family: 'Barlow';
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 130%;
text-align: center;
color: #FFFFFF;
`
export const CardImg =styled.img`
position: absolute;
top:-36px;
left: 30px;
right: 0;
`
export const CardSrtong=styled.strong`
display: block;
font-family: 'Barlow';
font-style: normal;
font-weight: 400;
text-align: center;
font-size: 14px;
line-height: 140%;
text-align: center;
color: #FFFFFF;
`
export const CardText =styled.p`
font-family: 'Barlow';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
text-align: center;
color: #ABBBC2;
`