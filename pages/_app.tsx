// アプリケーション全体のラッパー
// SSRをきちんとするためには、これが必須
import { AppProps } from 'next/app'
import Head from 'next/head'

const App = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
      <title>Wataru Tatsuda Portfolio</title>
    </Head>
    <Component {...pageProps} />
  </>
)

export default App