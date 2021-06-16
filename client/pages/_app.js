import Layout from '../components/Layout';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Layout showSideBar={true}>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}

export default MyApp;
