import styled from 'styled-components';
import { SpinnerContainer } from '../spinner/spinner.styles';

export const ButtonContainer = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: inherit;
  font-weight: bold;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  
  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const GoogleSignInButton = styled(ButtonContainer)`
  background-color: #4285f4;
  color: white;
  
  &:hover {
    background-color: #357ae8;
    border: none;
  }
`;

export const InvertedButton = styled(ButtonContainer)`
  background-color: white;
  color: black;
  border: 1px solid black;
  
  &:hover {
    background-color: black;
    color: white;
    border: none;
  }
`;

export const SpinnerButtonContainer = styled(SpinnerContainer)`
  width:30px;
  height:30px;
`