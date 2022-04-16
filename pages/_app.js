import '../styles/globals.css'
import { AuthUserProvider } from '../AuthUserProvider';

function MyApp({ Component, pageProps }) {

  return (
    <AuthUserProvider>
      <Component {...pageProps} />
    </AuthUserProvider>
  );
}

export default MyApp
