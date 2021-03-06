import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DiscussionEmbed } from 'disqus-react';
import { NextSeo } from 'next-seo';
import he from 'he';

import Layout from '../../components/Layout';

const Post = ({ post }) => {
	const { title, content, acf, featuredImage, author, tags, id } = post;
	console.log(id);
	console.log(title);

	return (
		<Layout>
			<NextSeo
				title={`${he.decode(title)} - Travel Eatinerary`}
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
									{tags.nodes.map((tag) => (
										<div className="tag">
											<p>{tag.name}</p>
										</div>
									))}
								</div>
								<h1 dangerouslySetInnerHTML={{ __html: title }}></h1>
								<div className="meta">
									2 days ago by {author.firstName} {author.lastName}
								</div>
							</div>
						</div>

						<div
							className="content"
							dangerouslySetInnerHTML={{ __html: content }}
						></div>

						<section className="comments">
							<DiscussionEmbed
								shortname="traveleatinerary"
								config={{
									url: `https://www.traveleatinerary.com/posts/${id}`,
									identifier: id,
									title: he.decode(title),
								}}
							/>
						</section>
					</article>
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
						max-width: 100%;
					}

					.content :global(figcaption) {
						font-family: 'Nunito Sans', sans-serif;
						font-weight: 300;
						text-align: center;
						margin-top: 2rem;
						font-size: 1.5rem;
					}

					.content :global(ul) {
						font-family: 'Nunito Sans', sans-serif;
						font-size: 2rem;
						font-weight: 300;
						line-height: 3.5rem;
						margin-bottom: 3rem;
						margin-left: 5rem;
					}

					.content :global(li):not(:last-child) {
						margin-bottom: 2rem;
					}

					.content :global(.blocks-gallery-grid) {
						list-style: none;
						margin-left: 0;
					}

					.comments {
						max-width: 740px;
						margin: 0 auto;
					}

					@media only screen and (max-width: 1000px) {
						.intro {
							flex-direction: column-reverse;
							margin-bottom: 3.5rem;
						}

						.details {
							margin-left: 0;
							margin-bottom: 2rem;
						}

						.hero-image {
							width: 100%;
						}
					}

					@media only screen and (max-width: 425px) {
						h1 {
							font-size: 3rem;
						}
					}
				`}
			</style>
		</Layout>
	);
};

export async function getStaticPaths() {
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
      `,
		},
	});

	const posts = await res.data;

	const paths = posts.data.posts.edges.map((post) => {
		return `/posts/${post.node.id}`;
	});

	return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
	const res = await axios({
		url: 'https://cms.traveleatinerary.com/graphql',
		method: 'POST',
		data: {
			query: `
        query MyQuery {
          post(id: "${params.id}") {
            id
            title(format: RENDERED)
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
      `,
		},
	});

	let selectedPost = await res.data.data.post;
	return { props: { post: selectedPost } };
}

export default Post;
