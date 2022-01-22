import styled from 'styled-components';
import { COLORS } from '../../constants';
import { pxToRem } from '../../utils';

export const StyledLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${pxToRem(100)};
  background-color: ${COLORS.lightGrey};
`;

