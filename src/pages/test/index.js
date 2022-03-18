import React from "react";
import styled from "styled-components";

function index() {
  return (
    <Page>
      <Container mw="960px">
        <Nav display="flex">
          <Div1>
            <h4>Hello,</h4>
          </Div1>
          <Div2>
            <h4>World</h4>
          </Div2>
        </Nav>
      </Container>
    </Page>
  );
}

export default index;

const Page = styled.div`
  width: 100%;
  background-color: #eee;
  color: #212121;
`;

const Container = styled.div`
  width: 100%;
  max-width: ${(props) => (props.mw ? props.mw : "1024px")};
  margin: 0 auto;
`;

const Nav = styled.div`
  display: ${(props) => (props.display ? "flex" : "grid")};
  justify-content: space-between;
`;

const Div1 = styled.div`
  padding: 10px;
`;
const Div2 = styled.div`
  padding: 10px;
`;
