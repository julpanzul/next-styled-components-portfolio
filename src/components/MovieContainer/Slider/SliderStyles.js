import styled from "styled-components";

export const SliderContainer = styled.div`
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1em;
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
`;
export const SliderControl = styled.div`
  width: 100%;
  position: absolute;
  left: 0;
  bottom: 35%;
`;
export const SliderNavButton = styled.a`
  width: 45px;
  height: 45px;
  position: absolute;
  background-color: #fff;
  color: #212121;
  border-radius: 50%;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;
