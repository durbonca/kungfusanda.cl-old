import styled from 'styled-components';
import { Container } from '@mui/material';

export const StyledContainer = styled(Container)`
  display: flex;
  max-width: 100%;
  padding: 0;
  background-color: #272727;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Item = styled.div`
  padding: 1em;
  color: white;
`;
