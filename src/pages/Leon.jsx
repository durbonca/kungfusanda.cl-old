import leon1img from '../img/leon/1.jpeg';
import leon2img from '../img/leon/2.jpeg';
import leon3img from '../img/leon/3.jpeg';
import leon4img from '../img/leon/4.jpeg';
import leon5img from '../img/leon/5.jpeg';
import leon6img from '../img/leon/6.jpeg';
import leon7img from '../img/leon/7.jpeg';
import leon8img from '../img/leon/8.jpeg';

export const Leon = () => {
  return (
    <div className="h-100 bg-dark bg-gradient bg-opacity-75">
      <section className="container">
        <div className="row pt-5">
          <div className="col">
            <h1 className="text-center text-white tracking-in-expand">DANZA DE LEÓN CHINO</h1>
            <h2 className="text-center text-danger tracking-in-contract">舞狮</h2>
          </div>
        </div>
        <div className="row pt-5 text-focus-in">
          <div className="col-12 offset-md-1 col-md-10">
            <h5 className="text-justify text-white">
              La danza del león, es una forma de danza tradicional en la cultura china y otros países asiáticos, en los que los artistas imitan los movimientos de un león, disfrazados de la representación de este animal, para traer buena suerte y fortuna.
            </h5>
            <h5 className="text-justify text-white pt-3">
              La danza del león se realiza generalmente durante el Año Nuevo chino y otros festivales chinos tradicionales y culturales. También se puede realizar en ocasiones importantes como eventos de apertura de negocios, celebraciones especiales o ceremonias de bodas, bautizos, cumpleaños, matrimonios, festividades o para honrar a invitados especiales de las comunidades chinas.
            </h5>
          </div>
        </div>
      </section>

      <section className="mt-5 pb-5">
        <div className="container pics">
          <div className="item level-3">
            <img src={leon1img} alt="Danza de león imagen" />
          </div>
          <div className="item level-3">
            <img src={leon2img} alt="Danza de león imagen" />
          </div>
          <div className="item level-3">
            <img src={leon3img} alt="Danza de león imagen" />
          </div>
          <div className="item level-3">
            <img src={leon4img} alt="Danza de león imagen" />
          </div>
          <div className="item level-3">
            <img src={leon5img} alt="Danza de león imagen" />
          </div>
          <div className="item level-3">
            <img src={leon6img} alt="Danza de león imagen" />
          </div>
          <div className="item level-3">
            <img src={leon7img} alt="Danza de león imagen" />
          </div>
          <div className="item level-3">
            <img src={leon8img} alt="Danza de león imagen" />
          </div>
        </div>
      </section>
    </div>
  );
};
