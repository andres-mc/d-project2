import React from 'react';
import styled from "styled-components";

const StyledSideNav1 = styled.div`
  position: fixed;
  height: 60px;
  width: 75px;     
  z-index: 1;     
  top: 5em;      
  background-color: #222; 
  overflow-x: hidden;     
  padding-top: 10px;
  color: white;
`
const StyledSideNav = styled.div`
  position: fixed;
  height: 60px;
  width: 75px;     
  z-index: 1;     
  top: 9em;      
  background-color: darkgray; 
  overflow-x: hidden;     
  padding-top: 10px;
  color: white;
`
export default class Sidebar extends React.Component {
  /* This defines the actual bar going down the screen */

  render() {
    return (
      <div>
        <StyledSideNav>
          <span>quotes</span>
        </StyledSideNav>
        <StyledSideNav1>
          <span>goals</span>
        </StyledSideNav1>
      </div>
      
    );
  }
}
//https://trendmicro-frontend.github.io/react-sidenav/
//https://reactjsexample.com/react-side-nav-component/
//https://codeburst.io/how-to-create-a-navigation-bar-and-sidebar-using-react-348243ccd93