import type { AppProps } from 'next/app';
import 'leaflet/dist/leaflet.css';
import '@/styles/grizzly.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
