import styled from 'styled-components';
import { COLORS, STYLING_CONFIGS } from '../../constants';
import { pxToRem } from '../../utils';

export const StyledSignIn = styled.div`
  background-color: ${COLORS.lightGrey};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;

  .signin {
    padding: ${pxToRem(30)};
    border-radius: ${pxToRem(STYLING_CONFIGS.BORDER_RADIUS)};
    width: 90%;
    max-width: ${pxToRem(400)};
    height: 100%;
    max-height: ${pxToRem(450)};
    background-color: #fff;
  }
  .sign-in__header img {
    cursor: pointer;
  }
  .sign-in__input-wrapper {
    margin-bottom: ${pxToRem(12)};

    label {
      display: block;
      margin-bottom: ${pxToRem(5)};
    }

    input {
      width: 100%;
      height: ${pxToRem(36)};
      padding: ${pxToRem(12)};
      padding-left: 0;
      border: none;
      border-bottom: ${pxToRem(1)} solid ${COLORS.black};
      outline: none;

      &::placeholder {
        color: ${COLORS.iconGrey};
      }
    }
  }
  button {
    width: 100%;
    height: ${pxToRem(36)};
    background-color: ${COLORS.blue};
    color: #fff;
    border: none;
  }
`;

export const StyledSignUp = styled(StyledSignIn)`
  
`;