import React from 'react';
import Link from 'next/link';

const CategoryPosts = ({ posts, category }) => {
	return (
		<section className="posts">
			<h3>{category}</h3>
			<div className="posts-list">
				{posts.data.posts.edges.map(({ node }) => (
					<div
						className="post"
						key={node.slug}
						style={{
							backgroundImage: `linear-gradient(rgba(100, 100, 100, 0.4), rgba(100, 100, 100, 0.4)), url(${node.featuredImage.mediaItemUrl})`
						}}
					>
						<Link href={`/posts/${node.slug}`}>
							<a href={`/posts/${node.slug}`}>
								<div className="tag">{node.tags.nodes[0].name}</div>
								<div className="details">
									<div className="title">
										<h2>{node.title}</h2>
									</div>
									<div className="description">
										<p>{node.acf.shortDescription}</p>
									</div>
								</div>
							</a>
						</Link>
					</div>
				))}
			</div>

			<style jsx>
				{`
					h3 {
						font-size: 2.5rem;
						margin-bottom: 3rem;
					}

					.posts {
						padding-bottom: 4rem;
					}

					.posts-list {
						display: flex;
						justify-content: space-between;
					}

					.post {
						background-position: center;
						background-size: cover;
						border-radius: 20px;
						transition: 0.2s all;
						max-width: 384px;
						height: 384px;
					}

					.post:hover {
						transform: scale(1.02);
					}

					a {
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						height: 100%;
						padding: 3rem;
					}

					.tag {
						text-transform: uppercase;
						font-size: 1.2rem;
						font-weight: 600;
						color: #ffd430;
					}

					.details {
						margin-bottom: 2rem;
						color: #fff;
					}

					h2 {
						font-size: 3.6rem;
						margin-bottom: 2rem;
					}

					p {
						font-size: 1.6rem;
					}

					@media only screen and (max-width: 425px) {
						.posts-list {
							flex-direction: column;
						}

						.post:not(:last-child) {
							margin-bottom: 3rem;
						}
					}
				`}
			</style>
		</section>
	);
};

export default CategoryPosts;
