import React from 'react';
import axios from 'axios';
import { NextSeo } from 'next-seo';

import Layout from '../../components/Layout';

const Post = ({ post }) => {
	const { title, content, acf, featuredImage, author, tags } = post;

	return (
		<Layout>
			<NextSeo
				title={`${title} - Travel Eatinerary`}
				description={acf.shortDescription}
			/>
			<main>
				<div className="container">
					<article>
						<div className="intro">
							<img
								src={featuredImage.mediaItemUrl}
								alt=""
								className="hero-image"
							/>
							<div className="details">
								<div className="tags">
									{tags.nodes.map(tag => (
										<div className="tag">
											<p>{tag.name}</p>
										</div>
									))}
								</div>
								<h1>{title}</h1>
								<div className="meta">
									2 days ago by {author.firstName} {author.lastName}
								</div>
							</div>
						</div>

						<div
							className="content"
							dangerouslySetInnerHTML={{ __html: content }}
						></div>
					</article>
					{/* <section className="related">
						<h3>You might also like</h3>
						<div className="related-posts"></div>
					</section> */}
				</div>
			</main>

			<style jsx>
				{`
					h1 {
						font-size: 5rem;
						margin-bottom: 2.5rem;
					}
					.intro {
						display: flex;
						align-items: center;
						margin-bottom: 8.5rem;
					}

					.hero-image {
						border-radius: 2rem;
						box-shadow: 0 4px 16px rgb(0, 0, 0, 0.2);
						flex: 0 0 48%;
						height: 556px;
						max-width: 621px;
						object-fit: cover;
					}

					.details {
						margin-left: 5rem;
					}

					.tags {
						display: flex;
						margin-bottom: 1.5rem;
					}

					.tag {
						border: 1px solid #1a1a1a;
						border-radius: 2rem;
						padding: 0.3rem 1.75rem;
						font-size: 1.1rem;
						font-weight: 500;
						letter-spacing: 0.2rem;
						text-transform: uppercase;
					}
					.tag:not(:last-child) {
						margin-right: 1rem;
					}

					.meta {
						font-size: 1.8rem;
					}

					.content {
						max-width: 740px;
						margin: 0 auto;
					}

					.content :global(p) {
						font-family: 'Nunito Sans', sans-serif;
						font-size: 2rem;
						font-weight: 300;
						line-height: 3.5rem;
						margin-bottom: 3rem;
					}

					.content :global(h2) {
						font-size: 3rem;
						margin: 4rem 0 2rem;
					}

					.content :global(figure) {
						display: flex;
						flex-direction: column;
						margin: 4rem 0;
					}

					.content :global(img) {
						margin: 0 auto;
						border-radius: 2rem;
						box-shadow: 0 4px 16px rgb(0, 0, 0, 0.2);
					}

					.content :global(figcaption) {
						font-family: 'Nunito Sans', sans-serif;
						font-weight: 300;
						text-align: center;
						margin-top: 2rem;
						font-size: 1.5rem;
					}
				`}
			</style>
		</Layout>
	);
};

export async function getStaticPaths() {
	// Call an external API endpoint to get posts

	const res = await axios({
		url: 'https://cms.traveleatinerary.com/graphql',
		method: 'POST',
		data: {
			query: `
        query PostsIDs {
          posts(first: 1000) {
            edges {
              node {
                id
              }
            }
          }
        }
      `
		}
	});

	const posts = await res.data;

	// Get the paths we want to pre-render based on posts
	const paths = posts.data.posts.edges.map(post => {
		return `/posts/${post.node.id}`;
	});

	// We'll pre-render only these paths at build time.
	// { fallback: false } means other routes should 404.
	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	// params contains the post `id`.
	// If the route is like /posts/1, then params.id is 1

	const res = await axios({
		url: 'https://cms.traveleatinerary.com/graphql',
		method: 'POST',
		data: {
			query: `
        query MyQuery {
          post(id: "${params.id}") {
            id
            title
            content
            acf {
              shortDescription
            }
            featuredImage {
              mediaItemUrl
            }
            author {
              firstName
              lastName
            }
            tags {
              nodes {
                name
              }
            }
          }
        }
      `
		}
	});

	const selectedPost = await res.data.data.post;

	// Pass post data to the page via props
	return { props: { post: selectedPost } };
}

export default Post;
