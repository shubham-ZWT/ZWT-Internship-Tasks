import styled from "styled-components";

const Card = styled.div`
  border: 2px solid ${(props) => (props.active ? "green" : "gray")};
  padding: 16px;
`;

export default Card;
