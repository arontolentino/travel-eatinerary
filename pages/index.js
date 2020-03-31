import React, { Fragment } from 'react';
import { NextSeo } from 'next-seo';

const index = () => {
	return (
		<Fragment>
			<NextSeo title="Travel Eatinerary" description="A Travel Blog" />
			<h1>Home</h1>
		</Fragment>
	);
};

export default index;
