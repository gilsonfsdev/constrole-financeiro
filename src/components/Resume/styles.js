import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 98%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  justify-content: space-around;
  margin-top: -50px;

  div:nth-child(1){
    border-radius: 30px 0px 0px;
  }
  
  div:nth-child(3){
    border-radius: 0px 30px 0px 0px;
  }
`;

export const Div = styled.div`

`;