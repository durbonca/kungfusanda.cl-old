import { Container } from '@mui/material';
import styled from 'styled-components';

export const StyledContainer = styled(Container)`
  max-width: 100%;
  background-color: white;
  padding: 3em;
  max-height: 100%;
  height: 100%;
  display: flex;
  gap: 1em;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  margin: auto 0;
  width: 40%;
  @media (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

export const TypographyBox = styled.div`
  width: 60%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;
