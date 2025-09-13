import React from 'react';
import Hero from './components/Hero';
import BrandTimeline from './components/BrandTimeline';
import BrandValues from './components/BrandValues';
import Products from './components/Products';

const page = () => {
	return (
		<div className="max-w-[1240px] mx-auto">
			<Hero />
			<BrandTimeline />
			<BrandValues />
			<Products />
		</div>
	);
};

export default page;
