import Layout from '../components/Layout'
import '../styles/globals.sass'
import { Provider } from "react-redux";
import store from '../app/store';


function MyApp({ Component, pageProps, store}) {
  return ( <>
    
    
    <Layout ><Provider store={store} >
      <Component {...pageProps} /></Provider>
    </Layout>
    </>
  ) 
  
}

export default MyApp
