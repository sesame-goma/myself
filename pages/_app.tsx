// アプリケーション全体のラッパー
// SSRをきちんとするためには、これが必須
import { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App