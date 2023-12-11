import React, { Component } from 'react';
import { FaGithub , FaLinkedin } from 'react-icons/fa';
import { MdEmail , MdClose} from 'react-icons/md';
import { BsTelephoneFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import Styled from "styled-components";

const StyledDiv = Styled.div`
   color : #78C7C7;
   font-size : 25px;

   @media (max-width : 600px){
   
    font-size : 18px;
   }
`

class Github extends Component {
  render() {
    return (
    <StyledDiv>
      <FaGithub />
    </StyledDiv>
    ) 
  }
}

class Email extends Component {
  render() {
    return (
    <StyledDiv>
      <MdEmail/>
    </StyledDiv>
    ) 
  }
}


class Linkedin extends Component {
  render() {
    return (
    <StyledDiv>
      <FaLinkedin/>
    </StyledDiv>
    ) 
  }
}

class Telephone extends Component {
  render() {
    return (
    <StyledDiv>
      <BsTelephoneFill/>
    </StyledDiv>
    ) 
  }
}

class Hamburger extends Component {
  render() {
    return (
    <StyledDiv>
      < GiHamburgerMenu />
    </StyledDiv>
    ) 
  }
}

class CloseBtn extends Component {
  render() {
    return (
    <StyledDiv>
          <MdClose style = {{
              fontSize : "30px",
              }}/>
    </StyledDiv>
    ) 
  }
}


export {Github , Email , Linkedin , Telephone , Hamburger , CloseBtn};