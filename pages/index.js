import React, { Fragment } from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import FeaturedPosts from '../components/FeaturedPosts';
import axios from 'axios';
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

Index.getInitialProps = async () => {
	const fetchCategoryPosts = (category, noOfPosts) => {
		const query = `
      query HomePagePosts {
        posts(where: {categoryName: "${category}"}, first: ${noOfPosts}) {
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

		return axios({
			url: 'https://cms.traveleatinerary.com/graphql',
			method: 'POST',
			data: {
				query
			}
		});
	};

	const featured = await fetchCategoryPosts('featured', 3);
	const budget = await fetchCategoryPosts('budget', 3);
	const ethical = await fetchCategoryPosts('ethical', 3);
	const guides = await fetchCategoryPosts('guides', 3);
	const cravings = await fetchCategoryPosts('cravings', 3);

	return {
		featured: featured.data,
		budget: budget.data,
		ethical: ethical.data,
		guides: guides.data,
		cravings: cravings.data
	};
};

export default Index;
