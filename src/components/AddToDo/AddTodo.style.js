import styled from 'styled-components';
import { COLORS, STYLING_CONFIGS } from '../../constants';
import { pxToRem } from '../../utils';

export const StyledAddToDo = styled.div`
  background-color: ${COLORS.lightGrey};
  padding: ${pxToRem(20)};

  input, textarea {
    width: 100%;
  }
  .todo-actions {
    display: flex;
    align-items: center;
    gap: 20px;
  }
`;


