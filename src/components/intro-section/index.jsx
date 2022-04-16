import { Typography } from '@mui/material';
import { StyledContainer, ImageContainer, TypographyBox } from './styles';
import logoSrc from '../../img/nuevoLogo.jpeg';

export const IntroSection = () => {
  return (
    <StyledContainer>
      <TypographyBox>
        <Typography>
          <span>
            Bienvenido a nuestra escuela `&quot;`GUANGONG`&quot;`, un espacio de grato ambiente para entrenar y sacar lo
            mejor de ti mediante nuestras disciplinas:
            <br />
            <br />
            <ul>
              <li> kung fu estilo choy lee fut</li>
              <li> Sanda (deporte de contacto) </li>
              <li> Taiji chen</li>
              <li> Acondicionamiento físico </li>
            </ul>
            A través de clases grupales y particulares (plan de personal trainer) para niños, jóvenes y adultos Nuestra
            escuela tiene espacio para la práctica recreativa, formativa y competitiva, somos un club deportivo afiliado
            a la Federación nacional de wushu y es formadora de deportistas seleccionados para representar a Chile en el
            extranjero en las áreas de taolu (kung fu tradicional) y sanda
            <br />
          </span>
        </Typography>
      </TypographyBox>
      <ImageContainer>
        <img
          src={logoSrc}
          alt="logo"
          style={{
            mixBlendMode: 'hard-light',
          }}
          width="100%"
          height="auto"
        />
      </ImageContainer>
    </StyledContainer>
  );
};
