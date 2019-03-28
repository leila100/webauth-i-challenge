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

export const Tab = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  transform: rotateY(180deg);
  backface-visibility: hidden;
  transition: all 0.4s linear;
`

export const TabLabel = styled.label`
  font-size: 22px;
  margin-right: 15px;
  padding-bottom: 5px;
  margin: 0 15px 10px 0;
  display: inline-block;
  border-bottom: 2px solid transparent;
`

export const TabRadio = styled.input`
  checked {
    color: #fff;
    border-color: #1161ee;
  }
`

export const Form = styled.form`
  min-height: 345px;
  position: relative;
  perspective: 1000px;
  transform-style: preserve-3d;
`

export const Group = styled.div`
  margin-bottom: 15px;

  label,
  input,
  button {
    width: 100%;
    color: #fff;
    display: block;
  }

  input,
  button {
    border: none;
    padding: 15px 20px;
    border-radius: 25px;
    background: rgba(255, 255, 255, 0.1);
  }

  input[data-type="password"] {
    text-security: circle;
    -webkit-text-security: circle;
  }
`

export const Label = styled.label`
  color: #aaa;
  font-size: 12px;
`
