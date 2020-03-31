import React, { Fragment } from 'react';
import Header from './Header';

const Layout = props => {
	return (
		<Fragment>
			<Header />

			{props.children}
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
