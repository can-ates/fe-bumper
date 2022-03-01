import { renderable, shape } from 'prop-types';
import Navbar from '../src/components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

MyApp.propTypes = {
  Component: renderable,
  pageProps: shape({}),
};

export default MyApp;
