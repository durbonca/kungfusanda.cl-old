import Horario1 from '../img/Horario1.jpeg';
import Horario2 from '../img/Horario2.jpeg';

import { ImageFull } from '../components/';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  min-height: 100vh;
  background-color: #fafafa;
  flex-direction: column;
`;

export const Horarios = () => {
  return (
    <StyledContainer>
      <ImageFull img={Horario1} altImg="horario de clases kung-fu" />
      <ImageFull img={Horario2} altImg="horario de clases sanda" />
    </StyledContainer>
  );
};
