import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { Container } from "../../styles/GlobalComponents";

import { Nav, Div1, Div2, Div3, NavLink, SocialIcons } from "./HeaderStyles";

const Header = () => (
  <Container>
    <Nav>
      <Div1>
        <Link href="/" passHref>
          <a style={{ display: "flex", alignItems: "center", color: "white" }}>
            <DiCssdeck size="3rem" /> <span>Portfolio</span>
          </a>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#projects" passHref>
            <NavLink>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#tech" passHref>
            <NavLink>Technologies</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#about" passHref>
            <NavLink>About</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://google.com">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://google.com">
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </Div3>
    </Nav>
  </Container>
);

export default Header;
