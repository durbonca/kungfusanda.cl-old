import gustavoImg from '../img/gustavo.jpeg';
import profesores1Img from '../img/kungfu/3.jpeg';
import profesores2Img from '../img/sanda/6.jpeg';
import { ImageFull } from '../components/';

export const Profesores = () => {
  return (
    <div className="h-100 bg-dark bg-gradient bg-opacity-75">
      <section className="container">
        <div className="row pt-5">
          <div className="col">
            <h1 className="text-center text-white tracking-in-expand">Maestro</h1>
            <h2 className="text-center text-danger tracking-in-contract">教師</h2>
          </div>
        </div>
        <div className="row pt-5 text-focus-in justify-content-around">
          <div className="col-12 col-md-5 mb-5">
            <ImageFull img={gustavoImg} altImg="Gustavo maestro foto" />
            <h5 className="text-justify text-white my-4">Gustavo Fellenberg :</h5>
            <h5 className="text-white">
              <p style={{ textAlign: 'justify' }}>
                El director de la escuela es el profesor Gustavo Fellenberg, titulado como docente de educación física y
                Faja negra Hung Sing Gwoon estilo choy lee fut familia Chan, lleva mas de 20 años en la practica de
                artes marciales (entre seminarios, torneos y constante capacitacion internacional), a nivel deportivo es
                entrenador certificado de sanda por la asociación de wushu de China, a traves del maestro WANG FEIYONG,
                tambien fue ex técnico nacional de sanda y formador de las primeras selecciones de este deporte, ademas
                de crear el circuito infantil nacional federado, obteniendo medallas en certámenes sudamericanos y
                panamericanos (IWUF) durante el 2015 hasta el 2019, actualmente, dirige la LIGA CHILENA DE SANDA, para
                seguir captando talentos nacionales y fomentar este deporte.
              </p>
            </h5>
            <div className="my-4">
              <ImageFull img={profesores2Img} altImg="Gustavo maestro foto" />
            </div>
            <ImageFull img={profesores1Img} altImg="Gustavo maestro foto" />
          </div>
        </div>
      </section>
    </div>
  );
};
