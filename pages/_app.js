import '../styles/globals.css'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import React from "react";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
