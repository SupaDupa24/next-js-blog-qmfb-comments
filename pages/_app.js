import '../styles/index.css'
import Particles from 'react-particles-js'
import particlesOptions from '../components/particles'


function MyApp({ Component, pageProps }) {
  return 
  <React.Fragment>
    <Particles params={{particlesOptions}} />
    <Component {...pageProps} />
  </React.Fragment>
}

export default MyApp
