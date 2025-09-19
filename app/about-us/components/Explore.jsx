import React from 'react';

import products from '../../../public/assets/images/products.jpg';
import services from '../../../public/assets/images/services.jpg';
import blog from '../../../public/assets/images/blog.jpg';
import Image from 'next/image';

const FEATURES = [
	{
		id: 1,
		title: 'Products',
		image: products,
	},
	{
		id: 2,
		title: 'Services',
		image: services,
	},
	{
		id: 3,
		title: 'Blog',
		image: blog,
	},
];

const Explore = () => {
	return (
		<div className="py-10 px-4 md:p-20 w-screen md:w-full space-y-4 md:space-y-9">
			<h3 className="text-xl md:text-5xl font-semibold md:font-bold font-primary">
				Explore
			</h3>
			<div className="flex gap-6 md:gap-15 overflow-x-auto w-full scrollbar-hide scroll-smooth snap-x snap-mandatory">
				{FEATURES.map((p) => (
					<div className="space-y-3 flex-shrink-0 snap-center" key={p.id}>
						<Image
							src={p.image}
							alt="People"
							className="w-[243px] md:w-[382px] h-[155px] md:h-[269px] object-cover rounded-md"
							priority
						/>

						<p className="text-md md:text-2xl font-semibold">{p.title}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Explore;
