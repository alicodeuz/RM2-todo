import styled from 'styled-components';
import { COLORS } from '../../constants';
import { pxToRem } from '../../utils';

export const StyledTodos = styled.div`
  
`;

export const StyledToDoItem = styled.div`
  display: flex;
  align-items: center;
  border-bottom: ${pxToRem(1)} solid ${COLORS.iconGrey};
  padding: ${pxToRem(5)};

  .todo-item__details {
    margin-left: ${pxToRem(20)};
    margin-right: auto;

    h4, p {
      margin: 0;
      margin-bottom: ${pxToRem(7)};
    }
  }
`;

