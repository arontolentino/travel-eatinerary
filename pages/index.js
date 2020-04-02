import React from 'react';
import { NextSeo } from 'next-seo';
import Layout from '../components/Layout';
import FeaturedPosts from '../components/FeaturedPosts';
import CategoryPosts from '../components/CategoryPosts';

const Index = () => {
	return (
		<Layout>
			<NextSeo title="Travel Eatinerary" description="A Travel Blog" />
			<main>
				<div className="container">
					<FeaturedPosts category="featured" noOfPosts="3" />
					<CategoryPosts category="Budget" noOfPosts="3" />
					<CategoryPosts category="Ethical" noOfPosts="3" />
					<CategoryPosts category="Guides" noOfPosts="3" />
					<CategoryPosts category="Cravings" noOfPosts="3" />
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

export default Index;
