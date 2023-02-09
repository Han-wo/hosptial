import React from 'react';
// styled-component import
import styled from 'styled-components';
// palette import
import palette from '../../lib/palette';

// button styling
const StyledButton = styled.button`
  border: none;
  border-radius: 3px;
  font-size: 13px;
  font-weight: bold;
  padding: 0.25rem 1rem;
  color: white;
  outline: none;
  cursor: pointer;
  width: 45px;
  margin-left: 830px;
  margin-top :1px;
  
  background: ${palette.violet[8]};
  &:hover {
    background: ${palette.violet[6]};
  }
`;
// Button 에 받아오는 props 를 모두 styledButton 에 전달한다는 의미
const Button = (props) => {
  return <StyledButton {...props} />;
};

export default Button;