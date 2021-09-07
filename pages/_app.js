import '../styles/index.css'
import particlesOptions from '../components/particles'
import Particles from 'react-particles-js'


function MyApp({ Component, pageProps }) {
  return 
  <React.Fragment>
    <Particles options={particlesOptions} />
    <Component {...pageProps} />
  </React.Fragment>
}

export default MyApp
