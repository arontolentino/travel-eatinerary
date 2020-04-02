import React from 'react';
import { NextSeo } from 'next-seo';
import axios from 'axios';

import Layout from '../components/Layout';
import FeaturedPosts from '../components/FeaturedPosts';
import CategoryPosts from '../components/CategoryPosts';

const Index = ({ featured, budget, ethical, guides, cravings }) => {
	return (
		<Layout>
			<NextSeo title="Travel Eatinerary" description="A Travel Blog" />
			<main>
				<div className="container">
					<FeaturedPosts posts={featured} />
					<CategoryPosts posts={budget} category="Budget" />
					<CategoryPosts posts={ethical} category="Ethical" />
					<CategoryPosts posts={guides} category="Guides" />
					<CategoryPosts posts={cravings} category="Cravings" />
				</div>
			</main>

			<style jsx>{`
				main {
					padding: 5rem 0;
				}

				h1 {
					color: pink;
				}
			`}</style>
		</Layout>
	);
};

export async function getStaticProps() {
	const getPosts = async (category, noOfPosts) => {
		const query = `
      query HomePagePosts {
        posts(where: {categoryName: "${category}"}, first: ${noOfPosts || 3}) {
          edges {
            node {
              id
              slug
              title
              date
              acf {
                shortDescription
              }
              tags {
                nodes {
                  name
                }
							}
							featuredImage {
								mediaItemUrl
							}
            }
          }
        }
      }
    `;

		try {
			const res = await axios({
				url: 'https://cms.traveleatinerary.com/graphql',
				method: 'POST',
				data: {
					query
				}
			});

			return await res.data;
		} catch (err) {
			console.log(err);
		}
	};

	const featured = await getPosts('featured', 3);
	const budget = await getPosts('budget', 3);
	const ethical = await getPosts('ethical', 3);
	const guides = await getPosts('guides', 3);
	const cravings = await getPosts('cravings', 3);

	return {
		props: {
			featured,
			budget,
			ethical,
			guides,
			cravings
		}
	};
}

export default Index;
