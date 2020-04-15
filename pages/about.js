import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';

const About = () => {
	return (
		<Layout>
			<NextSeo title="About - Travel Eatinerary" description="A Travel Blog" />
			<main>
				<div className="container">
					<h1>About Me</h1>
					<section className="content-top">
						<div className="content content-left">
							<p>
								Hi, I'm Felicia. <strong>Welcome to Travel Eatinerary</strong>
							</p>
							<p>
								Eight years ago, I never thought I would be excited about
								travelling and visiting new parts of the world outside of my
								bubble in Toronto, Ontario, Canada.
							</p>
							<p>
								That all changed when I travelled to the Philippines in 2015
								with my boyfriend, Josh, and discovered how exciting and
								beautiful new experiences out of my comfort zone can be.
							</p>
							<p>
								We then made it our mission to travel more. The only problem? We
								were students on a budget with limited income and travel
								experience.
							</p>
						</div>

						<img
							src="https://cms.traveleatinerary.com/wp-content/uploads/2020/04/about-me-1.jpg"
							alt=""
						/>
					</section>
					<section className="content-bottom">
						<img
							src="https://cms.traveleatinerary.com/wp-content/uploads/2020/04/about-me-2.jpg"
							alt=""
						/>
						<div className="content content-right">
							<p>
								I’ve spent the last 6 years collecting research, cost-saving
								tips, travel hacks, and itineraries with a travel budget of
								$2,000 per year. I’ve paid out-of-pocket for all the experiences
								documented in this blog - no freebies or “travel hacking”
								points!
							</p>
							<p>
								Through pictures, videos, and a good memory, I am now sharing my
								archives to help make travelling (and tasting delicious, new
								food) easier for anyone and everyone. So welcome fellow foodies,
								thrifters, ecotourists, animal activists, DIYers, and travel
								planners!
							</p>
							<p>
								Connect with me on Instagram {''}
								<a href="https://www.instagram.com/mytraveleatinerary/">
									@mytraveleatinery
								</a>
								!
							</p>
						</div>
					</section>
				</div>
			</main>

			<style jsx>{`
				h1 {
					font-size: 3rem;
					margin-bottom: 2rem;
				}

				a {
					color: #ffd430;
				}

				p {
					font-family: 'Nunito Sans', sans-serif;
					font-size: 2rem;
					font-weight: 300;
					line-height: 3.5rem;
				}

				p:not(:last-child) {
					margin-bottom: 3rem;
				}

				section {
					display: flex;
					align-items: center;
					margin-bottom: 3rem;
				}

				 {
					/* .content {
					display: flex;
					flex-direction: column;
					align-items: center;
					text-align: left;
				} */
				}

				img {
					min-width: 35rem;
					height: 35rem;
					object-fit: cover;
					border-radius: 2rem;
					box-shadow: 0 4px 16px rgb(0, 0, 0, 0.2);
				}

				.content-left {
					margin-right: 5rem;
				}

				.content-right {
					margin-left: 5rem;
				}

				@media only screen and (max-width: 425px) {
					section {
						flex-direction: column;
					}

					.content-left,
					.content-right {
						margin: 0;
					}

					.content-top {
						flex-direction: column-reverse;
					}

					img {
						width: 100%;
						margin-bottom: 3rem;
					}
				}
			`}</style>
		</Layout>
	);
};

export default About;
