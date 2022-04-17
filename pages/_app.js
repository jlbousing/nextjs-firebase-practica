import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import { AuthUserProvider } from '../AuthUserProvider';
import Layout from '../components/layout/Layout';

function MyApp({ Component, pageProps }) {

  return (
    <AuthUserProvider>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </AuthUserProvider>
  );
}

export default MyApp
