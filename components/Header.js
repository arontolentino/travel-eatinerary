import React, { useState } from 'react';
import Link from 'next/link';
import Hamburger from 'hamburger-react';

const Header = () => {
	const [hamburger, setHamburger] = useState('');

	return (
		<header>
			<div className="container">
				<a href="https://www.traveleatinerary.com/">
					<img
						src="https://cms.traveleatinerary.com/wp-content/uploads/2020/04/travel-eatinerary-logo.png"
						alt="Travel Eatinerary Logo"
						className="logo"
					/>
				</a>

				<nav style={{ display: hamburger }}>
					<ul>
						<li>
							<Link href="/">
								<a href="/">Home</a>
							</Link>
						</li>
						<li>
							<Link href="/about">
								<a href="/">About</a>
							</Link>
						</li>
					</ul>
				</nav>
				<div className="hamburger">
					<Hamburger
						onToggle={(toggled) => {
							if (toggled) {
								setHamburger('block');
							} else {
								setHamburger('');
							}
						}}
					/>
				</div>
			</div>

			<style jsx>
				{`
					header {
						background: #fff;
						padding: 2rem 0;
						box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
						width: 100%;
					}

					.nav {
						display: block;
					}

					.container {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					.logo {
						width: 17rem;
					}

					ul {
						display: flex;
						list-style: none;
						font-size: 1.6rem;
					}

					li:not(:last-of-type) {
						margin-right: 3rem;
					}

					a {
						transition: 0.2s all;
					}

					a:hover {
						color: #ffd430;
						font-weight: 500;
					}

					.hamburger {
						display: none;
					}

					@media only screen and (max-width: 425px) {
						nav {
							display: none;
							position: absolute;
							top: 88.1667px;
							width: 100vw;
							left: 0;
							padding: 0 2rem;
							z-index: 99;
							background: #f3f3f3;
							 {
								/* box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06); */
							}
						}

						ul {
							display: flex;
							flex-direction: column;
						}

						li {
							text-align: center;
							padding: 2.5rem 0;
						}

						li:not(:last-of-type) {
							margin-right: 0;
						}

						.hamburger {
							display: block;
						}
					}
				`}
			</style>
		</header>
	);
};

export default Header;
