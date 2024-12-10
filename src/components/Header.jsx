import { NavLink } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.header`
  background-color: blueviolet;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: Arial, Helvetica, sans-serif;
  & h1 {
    color: #ffffff;
  }
  & nav ul {
    display: flex;
    gap: 36px;
    list-style: none;
    & li a {
      color: #ffffff80;
      text-decoration: none;
      font-size: 18px;
      &:hover,
      &.active {
        color: #ffffff;
      }
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
        <h1>LOGO</h1>
        <nav>
          <ul>
            <li>
              <NavLink to={"/"}>Página Inicial</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>Sobre</NavLink>
            </li>
            <li>
              <NavLink to={"/contacts"}>Contatos</NavLink>
            </li>
          </ul>
        </nav>
    </HeaderContainer>
  );
};

export default Header;
