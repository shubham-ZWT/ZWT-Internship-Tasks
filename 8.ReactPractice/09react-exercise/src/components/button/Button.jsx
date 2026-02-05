import styled from "styled-components";

const Button = styled.button`
  padding: 10px 16px;
  border-radius: 6px;
  border: none;
  background-color: ${(props) =>
    props.variant === "danger"
      ? props.theme.colors.danger
      : props.theme.colors.primary};
  color: white;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.variant === "danger" ? "#bd0505" : "#0a4ee2"};
  }
`;

export default Button;
