import kungfu1img from '../img/kungfu/1.jpeg';
import kungfu3img from '../img/kungfu/3.jpeg';
import kungfu7img from '../img/kungfu/7.jpeg';
import kungfu8img from '../img/kungfu/8.jpeg';
import kungfu9img from '../img/kungfu/9.jpeg';

export const KungFu = () => {
  return (
    <div className="h-100 bg-dark bg-gradient bg-opacity-75">
      <section className="container mb-5">
        <div className="row pt-5">
          <div className="col">
            <h1 className="text-center text-white tracking-in-expand">Kung fu</h1>
            <h2 className="text-center text-danger tracking-in-contract">武术蔡李佛</h2>
          </div>
        </div>
        <div className="row pt-5 text-focus-in">
          <div className="col-12 offset-md-1 col-md-10">
            <h5 className="text-justify text-white">
              nuestro sistema de kung fu es el Choy Lee Fut (cantonés) o Cai Li Fo (mandarín) 蔡李佛, es un arte marcial
              china fundada en 1836 por Chan Heung (陳享). Choy Lee Fut fue nombrado en honor al monje budista Choy Fook
              蔡褔 (Cai Fu) que le enseñó Choy Gar, Li Yau-San 李友山 que le enseñó Li Gar, y su tío Chan Yuen-Wu 陳遠護
              que le enseñó Fut Gar, en honor a Buda después de lo cual fue nombrado el arte.
            </h5>
            <h5 className="text-justify text-white pt-3">
              El sistema combina las técnicas de artes marciales de varios sistemas de kung-fu del norte y del sur de
              China; las poderosas técnicas de brazo y mano de las formas animales Shaolin del sur, combinadas con los
              movimientos circulares extendidos, el cuerpo torcido y el ágil trabajo de pies que caracterizan las artes
              marciales del norte de China. Es considerado un estilo externo, combinando técnicas suaves y duras, además
              de incorporar una amplia gama de armas como parte de su currículum. Choy Li Fut es un sistema de
              autodefensa eficaz, especialmente conocido para la defensa contra múltiples atacantes. Contiene una amplia
              variedad de técnicas, incluyendo puñetazos de largo y corto alcance, patadas, barridos y bajadas, ataques
              de puntos de presión, bloqueos de articulaciones y agarres.
            </h5>
            <h5 className="text-justify text-white pt-3">
              {' '}
              La escuela de kung fu está dirigida por el profesor Gustavo Fellenberg, con grado Hung Sing Gwoon del
              estilo Choy lee fut de la familia Chen, con 23 años de práctica en artes marciales, seminarios,
              capacitaciones y medallista en torneos nacionales e internacionales en sanda y taolu.
            </h5>{' '}
          </div>
        </div>
      </section>

      <section className="container mt-5 pb-5">
        <div className="pics mt-5">
          <div className="item level-3">
            <img src={kungfu1img} alt="kung-fu imagen" />
          </div>

          <div className="item level-3">
            <img src={kungfu3img} alt="kung-fu imagen" />
          </div>

          <div className="item level-3">
            <img src={kungfu7img} alt="kung-fu imagen" />
          </div>
          <div className="item level-3">
            <img src={kungfu8img} alt="kung-fu imagen" />
          </div>
          <div className="item level-3">
            <img src={kungfu9img} alt="kung-fu imagen" />
          </div>
        </div>
      </section>
    </div>
  );
};
