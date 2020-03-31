import Link from 'next/link';

const Header = () => {
	return (
		<header>
			<div className="container">
				<span className="logo">Travel Eatinerary</span>
				<nav>
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
						<li>
							<Link href="/contact">
								<a href="/">Contact</a>
							</Link>
						</li>
					</ul>
				</nav>
			</div>

			<style jsx>
				{`
					header {
						background: #fff;
						padding: 2rem 0;
						box-shadow: 0 4px 16px rgba(0, 0, 0, 0.06);
						width: 100%;
					}

					.container {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}

					.logo {
						font-size: 3rem;
						font-weight: 700;
					}

					ul {
						display: flex;
						list-style: none;
						font-size: 1.6rem;
					}

					li:not(:last-of-type) {
						margin-right: 2rem;
					}

					@media only screen and (max-width: 425px) {
						.container {
							flex-direction: column;
						}

						.logo {
							margin-bottom: 1.5rem;
						}
					}
				`}
			</style>
		</header>
	);
};

export default Header;
