import type { AppProps } from 'next/app';
import '@/styles/grizzly.css';

const App = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default App;
