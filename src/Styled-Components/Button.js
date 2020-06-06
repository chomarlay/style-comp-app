import styled from 'styled-components';

const Button = styled.button`
  cursor: pointer;
  background: black;
  color: ${(props) => (props.themeColor ? props.themeColor : 'white')};
  font-size: 20px;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 5px;
`;

export default Button;
