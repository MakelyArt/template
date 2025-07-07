import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
<style jsx global>{`
  html {
    scroll-behavior: smooth;
  }
`}</style>
