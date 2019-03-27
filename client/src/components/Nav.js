import React from "react"
import { NavLink } from "react-router-dom"

import { NavbarWrapper, Links } from "../styles/navStyles"

const Nav = () => {
  return (
    <NavbarWrapper>
      <Links>
        <NavLink to='/api/register'>Register</NavLink>
      </Links>
      <Links>
        <NavLink to='/api/login'>Login</NavLink>
      </Links>
      <Links>
        <NavLink to='/api/restricted/users'>Users</NavLink>
      </Links>
    </NavbarWrapper>
  )
}

export default Nav
