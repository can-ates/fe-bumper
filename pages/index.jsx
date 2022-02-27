import Hero from '../src/containers/Hero';
import PayLater from '../src/containers/PayLater';
import Statistics from '../src/containers/Statistics';
import PayNow from '../src/containers/PayNow';
import Testimonial from '../src/containers/Testimonial';

export default function Home() {
  return (
    <main>
      <div>
        <Hero />
      </div>
      <div>
        <PayLater />
      </div>
      <div>
        <Statistics />
      </div>
      <div>
        <PayNow />
      </div>
      <div>
        <Testimonial />
      </div>
    </main>
  );
}
