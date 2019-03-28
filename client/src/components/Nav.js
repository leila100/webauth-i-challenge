import React from "react"
import { NavLink } from "react-router-dom"

import { NavbarWrapper, Links } from "../styles/navStyles"

const Nav = () => {
  return (
    <NavbarWrapper>
      <Links>
        <NavLink to='/authenticate'>Register/login</NavLink>
      </Links>
      <Links>
        <NavLink to='/users'>Users</NavLink>
      </Links>
    </NavbarWrapper>
  )
}

export default Nav
