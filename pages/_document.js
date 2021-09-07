import Document, { Html, Head, Main, NextScript } from 'next/document'
import particlesOptions from '../components/particles'
import Particles from 'react-particles-js'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
        <Particles options={particlesOptions} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
