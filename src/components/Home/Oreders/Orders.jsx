import React from 'react'
import OrderBady from './OrderBady'
import {OrderWrapper,OrderWrapperTop,OrderTitle,OrderButton,OrderWrapperButton,OrderTopButton,OrderTopButtonText,OrderTopButtonText2,OrderDriver,OrderButtom,OrderSpan,OrderButtomText,OrderButtomButton,OrderDriver2} from './OrdersStyled'

function Orders() {
  return (
    <OrderWrapper>
      <OrderWrapperTop>
        <OrderTitle>Orders #34562</OrderTitle>
        <OrderWrapperButton>
          <OrderButton  style={{background: '#EA7C69', color:'#fff'}} type='button'>Dine In</OrderButton>
          <OrderButton type='button'>To Go</OrderButton>
          <OrderButton type='button'>Delivery</OrderButton>
        </OrderWrapperButton>
        <OrderTopButton>
          <OrderTopButtonText>Item</OrderTopButtonText>
          <OrderTopButtonText2>Qty</OrderTopButtonText2>
          <OrderTopButtonText>Price</OrderTopButtonText>
        </OrderTopButton>
      </OrderWrapperTop>
      <OrderDriver/>
<OrderBady/>


<OrderDriver2/>
<OrderButtom>
  <OrderSpan>Discount</OrderSpan>
  <OrderButtomText>$0</OrderButtomText>
</OrderButtom>

<OrderButtom>
<OrderSpan>Sub total</OrderSpan>
  <OrderButtomText> $ 21,03</OrderButtomText>
</OrderButtom>

<OrderButtomButton>
Continue to Payment
</OrderButtomButton>
    </OrderWrapper>
  )
}

export default Orders