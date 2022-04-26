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
              El León es un símbolo icónico muy importante para una escuela de Kung Fu puesto que representa el espíritu
              y energía de esa escuela. Solo una escuela de Kung Fu podrá hacer la danza del león ya que requiere
              postura de caballo y complicados trabajos de pies. Tradicionalmente, un león sureño se basará en uno de
              los tres personajes principales del libro chino “El Romance de Los Tres Reinos”. Estos Héroes son:
            </h5>

            <h5 className="text-justify text-white">
              <ul>
                <li>Kwang Gung- León Rojo</li>
                <li>Zhang Fei- León Negro</li>
                <li>Liu Bei- León Dorado</li>
              </ul>
            </h5>

            <h5 className="text-justify text-white pt-3">
              Cada león expresa la personalidad de la figura que representa. El león Kwan Gung es representa con la
              cabeza mantenida en alto, ya que Kwan Gung fue una persona muy justa y honorable. El león Zhang Fei
              representa a una persona de naturalidad más joven: es usualmente considerado como un león de pelea. El
              león Liu Bei es considerado más viejo y sabio o más maduro. Este león es más precavido, tomándose su
              tiempo de explorar las cosas en vez de abalanzarse sobre ellas. El objetivo principal de la danza del león
              era espantar los malos espíritus. Era también usada para bendecir nuevos hogares o eventos felices (león
              dorado) apertura de restoranes (león negro) y traerles buena fortuna, matrimonios (león rojo) y funerales
              (león blanco).
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
