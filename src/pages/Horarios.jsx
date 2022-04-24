import Horario1 from '../img/Horario1.jpeg';
import Horario2 from '../img/Horario2.jpeg';

import { ImageFull } from '../components/';

export const Horarios = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        minHeight: '100vh',
        backgroundColor: '#fafafa',
      }}
    >
      <ImageFull img={Horario1} altImg="horario de clases kung-fu" />
      <ImageFull img={Horario2} altImg="horario de clases sanda" />
    </div>
  );
};
