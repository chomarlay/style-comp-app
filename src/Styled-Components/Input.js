import styled from 'styled-components';

const Input = styled.input`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.themeColor ? props.themeColor : 'blue')};
  margin: 1em;
  text-align: left;
  display: flex;
  width: ${(props) => (props.width ? props.width : '20%')};
`;

export default Input;
