import styled from "styled-components";


export const HeaderWrapper = styled.div`

display: flex;
align-items: center;
justify-content: space-between;


background:#393C49;
`
export const Titlewrapper = styled.div`


`
export const Formwrapper = styled.form`
display: flex;
align-items: center;
justify-content: space-between;
width: 220px;
height: 48px;
background: #2D303E;
border: 1px solid #393C49;
border-radius: 8px;

padding: 14px;
`

export const FormInput  = styled.input`
width: 164px;
height: 20px;
font-family: 'Barlow';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 140%;
color: white;
background:none;
border: none;

`
export const HeaderTitle = styled.h2`
font-family: 'Barlow';
font-style: normal;
font-weight: 600;
font-size: 28px;
line-height: 140%;
color: #FFFFFF;
margin: 0;

` 
export const HeaderSpan = styled.span`
font-family: 'Barlow';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 140%;
/* or 22px */


/* Text / Lighter */

color: #E0E6E9;

` 

export const HeaderAllWapper = styled.div`

margin-left: 103px;
padding-left:14px;
width: 748px;
margin-bottom:27px;
margin-top: auto;
`
export const HeaderLinkList = styled.ul`
list-style: none;
display: flex; 
align-items:center;
margin: 0;
padding: 0;
margin-top: 24px;

border-bottom: 1px solid #2D303E;

`
export const HeaderLinkItem = styled.li`
margin-right: 35px;
border-bottom: 3px solid transparent;
&:hover{
    border-bottom: 3px solid #EA7C69;
}


`;
export const HeaderLinkTitle = styled.h6``
export const HeaderSelectwraper = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 24px;
margin-bottom: 27px;
`
export const SelektTitle = styled.h3`
font-family: 'Barlow';
font-style: normal;
font-weight: 600;
font-size: 20px;
line-height: 140%;
color: #FFFFFF;
`

export const HeaderSelekt = styled.select`
background: #1F1D2B;
border: 1px solid #393C49;
border-radius: 8px;
padding: 14px;
color: white;

`



