import sanda1img from '../img/sanda/1.jpeg';
import sanda2img from '../img/sanda/2.jpeg';
import sanda5img from '../img/sanda/5.jpeg';
import sanda6img from '../img/sanda/6.jpeg';
import sanda7img from '../img/sanda/7.jpeg';
import sanda8img from '../img/sanda/8.jpeg';

export const Sanda = () => {
  return (
    <div className="h-100 bg-dark bg-gradient bg-opacity-75">
      <section className="container">
        <div className="row pt-5">
          <div className="col">
            <h1 className="text-center text-white tracking-in-expand">SANDA</h1>
            <h2 className="text-center text-danger tracking-in-contract">散打</h2>
          </div>
        </div>
        <div className="row pt-5 text-focus-in">
          <div className="col-12 offset-md-1 col-md-10">
            <h5 className="text-justify text-white">
              El sanda , es el deporte de contacto pleno del wushu kung fu, se caracteriza por su reglamento flexible,
              donde está permitido golpear con puños y patadas, además de ocupar técnicas de derribos, se compite sobre
              una tarima llama leitai.{' '}
            </h5>
            <h5 className="text-justify text-white pt-3">
              {`Nuestra escuela es dirigida por el profesor Gustavo Fellenberg, ex técnico nacional de sanda y Formador de
              la primera selección chilena obteniendo medallas a nivel sudamericano y panamericano, a esto se suma que
              sus métodos de entrenamiento están bajo la supervisión del maestro "wang fengyong", profesor de la
              asociación de wushu de China, la mayor entidad del wushu en el mundo.`}
            </h5>
          </div>
        </div>
      </section>
      <div className="col-8 offset-2 mt-5 item">
        <img width="100%" src={sanda6img} alt="sanda foto" />
      </div>
      <section className="mt-5 pb-5">
        <div className="container pics">
          <div className="item level-3">
            <img src={sanda1img} alt="sanda foto" />
          </div>
          <div className="item level-3">
            <img src={sanda2img} alt="sanda foto" />
          </div>
          <div className="item level-3">
            <img src={sanda5img} alt="sanda foto" />
          </div>

          <div className="item level-3">
            <img src={sanda7img} alt="sanda foto" />
          </div>
          <div className="item level-3">
            <img src={sanda8img} alt="sanda foto" />
          </div>
        </div>
      </section>
    </div>
  );
};
