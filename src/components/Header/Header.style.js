import styled from 'styled-components';
import { COLORS } from '../../constants';

export const StyledHeader = styled.header`
  padding: 20px;
  background-color: ${COLORS.main};
  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: '';
    width: 100px;
    height: 100px;
    background: yellow;
  }

  .header-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${window.location.pathname === '/about' ? 'red' : 'transparent'};
  }
`;


