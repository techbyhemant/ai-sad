import React from 'react';
import articleImg from '../../public/assets/images/article.jpg';
import Image from 'next/image';

const ARTICLES = [
	{
		id: 1,
		image: articleImg,
		heading: 'Article Heading',
		description:
			'A value that the company has. A value that the company has. A value that the company has. A value that the company has',
	},
	{
		id: 2,
		image: articleImg,
		heading: 'Article Heading',
		description:
			'A value that the company has. A value that the company has. A value that the company has. A value that the company has',
	},
	{
		id: 3,
		image: articleImg,
		heading: 'Article Heading',
		description:
			'A value that the company has. A value that the company has. A value that the company has. A value that the company has',
	},
];

const Article = ({ image, heading, description }) => {
	return (
		<div className="flex flex-col gap-6 h-full">
			<Image
				src={image}
				alt={heading}
				className="object-cover h-[232px] w-full"
			/>
			<div className="flex flex-col gap-3">
				<h4 className="font-semibold text-2xl">{heading}</h4>
				<p className="font-secondary font-medium text-md">{description}</p>
			</div>
		</div>
	);
};

const NewsAndArticles = () => {
	return (
		<section className="py-24 px-20 space-y-11">
			<h3 className="font-primary font-bold text-4xl">New & Articles</h3>
			<div className="grid grid-cols-3 gap-20 ">
				{ARTICLES.map((article) => (
					<Article
						key={article.id}
						image={article.image}
						heading={article.heading}
						description={article.description}
					/>
				))}
			</div>
		</section>
	);
};

export default NewsAndArticles;
