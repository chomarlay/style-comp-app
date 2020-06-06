import styled from 'styled-components';

const Button = styled.a`
  background: white;
  color: ${(props) => (props.themeColor ? props.themeColor : 'black')};
  font-size: 2em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid black;
  border-radius: 5px;
`;

export default Button;
