
import { GlobalStyled } from "./globaoStyled"
import Sidebar from "./components/Sidebar/Sidebar"
import { Route, Routes } from "react-router-dom"
import Header from "./components/Home/Header"
import Orders from "./components/Home/Oreders/Orders"

import {AppStyled} from "./AppSteled"


function App() {
  return (
    <AppStyled>
      <Sidebar />
      <Header/>
      <Orders/>
{/* <Routes>
  <Route path="/" element={}/>
</Routes> */}

      <GlobalStyled />

    </AppStyled>
  )
}

export default App
