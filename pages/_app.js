import '../global.css';
import Router from 'next/router';
import * as gtag from '../lib/gtag';

export default function MyApp({ Component, pageProps }) {
	Router.events.on('routeChangeComplete', (url) => gtag.pageview(url));

	return <Component {...pageProps} />;
}
