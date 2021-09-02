import Alert from '../components/alert'
import Footer from '../components/footer'
import Meta from '../components/meta'
import Particles from 'react-particles-js'
import particlesOptions from '../components/particles'

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
      <Particles params={{particlesOptions}} />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
