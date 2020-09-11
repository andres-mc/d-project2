import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import { randomQuote } from './Components/Quote';

const StyledSideNav1 = styled.div`
  position: fixed;
  height: 30px;
  width: 55px;
  z-index: 1;
  top: 5em;
  background-color: #222;
  overflow-x: hidden;
  padding: 10px 10px 3px 10px;
  color: white;
`;
const StyledSideNav = styled.div`
  position: fixed;
  height: 30px;
  width: 55px;
  z-index: 1;
  top: 8.4em;
  background-color: rgb(0, 140, 255);
  overflow-x: hidden;
  padding: 10px 10px 3px 10px;
  color: white;
`;
export default function Sidebar({ randomQuote, quotes }) {
  /* This defines the actual bar going down the screen */

  return (
    <div>
      <Link to="/">
        <StyledSideNav1 className="sideButton">
          <span onClick={(e) => randomQuote(e, quotes)}>Quotes</span>
        </StyledSideNav1>
      </Link>
      <Link to="/goals">
        <StyledSideNav className="sideButton">
          <span>Goals</span>
        </StyledSideNav>
      </Link>
    </div>
  );
}
//https://trendmicro-frontend.github.io/react-sidenav/
//https://reactjsexample.com/react-side-nav-component/
//https://codeburst.io/how-to-create-a-navigation-bar-and-sidebar-using-react-348243ccd93

//onClick={(e) => randomQuote(e)}
