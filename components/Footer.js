import React from 'react';

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<p>Travel Eatinerary © 2020</p>
			</div>

			<style jsx>
				{`
					footer {
						padding: 3rem 0;
						background: #333333;
					}

					p {
						font-size: 1.6rem;
						text-align: center;
						color: #fff;
					}
				`}
			</style>
		</footer>
	);
};

export default Footer;
