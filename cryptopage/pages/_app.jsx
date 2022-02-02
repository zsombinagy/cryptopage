import Layout from '../components/Layout'
import '../styles/globals.sass'
import store from '../app/store'
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <Provider store={store} >
        <App />
      </Provider>
      <Component {...pageProps} />
    </Layout>
  ) 
  
}

export default MyApp
