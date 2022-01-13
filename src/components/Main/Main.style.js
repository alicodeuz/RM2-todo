import styled from 'styled-components';
import { COLORS, STYLING_CONFIGS } from '../../constants';
import { pxToRem } from '../../utils';

export const StyledMain = styled.section`
  padding: ${pxToRem(20)};
  width: 100%;
  height: calc(100vh - ${pxToRem(STYLING_CONFIGS.HEADER_HEIGHT)});
  overflow: auto;
`;


