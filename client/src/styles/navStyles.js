import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const NavbarWrapper = styled(Flex)`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  border-bottom: 1px solid #3f0122;
  background-color: black;
  z-index: 5;
`
export const Links = styled(Flex)`
  justify-content: space-evenly;
  width: 30%;
  font-size: 2rem;

  a {
    color: white;
    margin-right: 20px;
    padding-bottom: 5px;
  }

  .active {
    border-bottom: 3px solid #33ccff;
  }
`
