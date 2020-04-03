import React, { Fragment } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = props => {
	return (
		<Fragment>
			<Header />

			{props.children}
			<Footer />
			<style jsx global>{`
				.container {
					max-width: 1270px;
					padding: 0 2rem;
					margin: 0 auto;
				}
			`}</style>
		</Fragment>
	);
};

export default Layout;
