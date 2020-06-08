import styled from 'styled-components';

const Label = styled.text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.themeColor ? props.themeColor : 'green')};
  margin: 1em;
  text-align: left;
  // display: flex;
`;

export default Label;
