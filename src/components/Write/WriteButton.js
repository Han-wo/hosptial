import React from 'react';
import styled from 'styled-components';
// button component import
import Button from '../common/Button'

const WriteButtonBlock = styled.div`
  margin-top: 1rem;
  margin-bottom: 3rem;
  /* button 끼리 붙어있을 때의 style */
  button + button {
    margin-left: 0.5rem;
  }
`;

// button 컴포넌트를 가져와서 새 컴포넌트로 만듬

const StyledButton = styled(Button)`
  height: 2.125rem;
  & + & {
    margin-left: 0.5rem;
    
  }
`;
const WriteButton = ({ onCancel, onPublish }) => {
  return (
    <WriteButtonBlock>
        {/* click event props settings */}
      <StyledButton onClick={onPublish}>등록</StyledButton>
       {/* button color props,click event props settings */}
      <StyledButton gray onClick={onCancel}>취소</StyledButton>
    </WriteButtonBlock>
  );
};

export default WriteButton;