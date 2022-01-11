import styled from 'styled-components';
import { COLORS, STYLING_CONFIGS } from '../../constants';
import { pxToRem } from '../../utils';

export const StyledHeader = styled.header`
  padding: 0 ${pxToRem(16)};
  background-color: ${COLORS.main};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: ${pxToRem(STYLING_CONFIGS.HEADER_HEIGHT)};
  color: #fff;

  .grid-wrapper {
    display: flex;
    align-items: center;

    h3 {
      margin-left: ${pxToRem(10)};
      font-weight: 400;
    }
  }

  .header-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    button {
      background: transparent;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: none;
      position: relative;
      height: 100%;
      width: ${pxToRem(48)};
      padding: 0;
      &:hover {
        background-color: ${COLORS.darkBlue};
      }
    }

    .header-notifications > span {
      background: ${COLORS.darkBlue};
      color: #fff;
      font-size: ${pxToRem(11)};
      display: flex;
      align-items: center;
      justify-content: center;
      width: ${pxToRem(16)};
      height: ${pxToRem(16)};
      border-radius: 50%;
      position: absolute;
      top: ${pxToRem(8)};
      right: ${pxToRem(8)};
    }
  }
  .header-input {
    width: 100%;
    max-width: ${pxToRem(400)};
    margin: 0 ${pxToRem(10)};

    input {
      width: 100%;
      height: ${pxToRem(32)};
      border-radius: ${pxToRem(4)};
      border: ${pxToRem(1)} solid ${COLORS.grey};
      background-color: ${COLORS.lightGrey};
    }
  }
`;


