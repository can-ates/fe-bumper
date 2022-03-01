import styles from '../../styles/Home.module.css';
import Card from '../components/Card';

const Testimonal = () => {
  return (
    <section className="relative max-h-min py-20 px-14">
      <div
        className={`${styles['background-container']} ${styles['testimonial-background']}`}
      />
      <Card className="max-w-sm sm:ml-auto">
        <div>
          <span className="font-semibold">
            "Est sem nisl morbi praesent tempor augue in venenatis dolor massa
            viverra parturient at ligula.
          </span>
          <p>
            Ad magnis in justo lobortis vestibulum a adispiscing ut eget
            ullamcorper pulvinar pharetra cursus consectetur ante. Senectus
            primis scelerisque a vestibulum vestibulum consectetur inceptos
            pharetra. Suspendisse ultrices porta."
          </p>
        </div>
        <div className="mt-4 flex items-center">
          <div className="flex flex-col border-r-2 border-black pr-4">
            <span>Eddie Hawtborne</span>
            <span>Managing Director</span>
          </div>
          <span className="pl-4 font-mono font-bold">Arnold Clark</span>
        </div>
      </Card>
    </section>
  );
};

export default Testimonal;
