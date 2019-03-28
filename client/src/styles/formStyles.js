import styled from "styled-components"

export const AuthWrapper = styled.div`
  width: 100%;
  margin: auto;
  max-width: 525px;
  min-height: 670px;
  position: relative;
  background: #3d4c74;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
`

export const Auth = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  padding: 90px 70px 50px 70px;
  background: rgba(40, 57, 101, 0.9);
`

export const Group = styled.div`
  margin-bottom: 15px;

  input {
    width: 100%;
    color: #fff;
    display: block;
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
    outline: none;
  }

  input[type="submit"] {
    background: #1161ee;
    cursor: pointer;
    text-transform: uppercase;
  }

  input[data-type="password"] {
    text-security: circle;
    -webkit-text-security: circle;
  }
`

export const Label = styled.label`
  font-size: 12px;
  text-transform: uppercase;
  width: 100%;
  color: #fff;
  display: block;
`

export const Password = styled.input`
  text-security: circle;
  -webkit-text-security: circle;
`

export const HR = styled.hr`
  height: 2px;
  margin: 60px 0 50px 0;
  background: rgba(255, 255, 255, 0.2);
`

export const Footer = styled.div`
  text-align: center;

  label {
    cursor: pointer;
  }
`

export const Message = styled.h2`
  color: #1161ee;
  text-align: center;
  font-size: 35px;
`
