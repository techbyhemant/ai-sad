import React from 'react';
import Hero from './components/Hero';
import BrandTimeline from './components/BrandTimeline';
import BrandValues from './components/BrandValues';
import Products from './components/Products';

const page = () => {
	return (
		<div className="flex flex-col overflow-x-hidden">
			<div className="w-full max-w-[1440px] mx-auto h-full">
				<Hero />
				<BrandTimeline />
				<BrandValues />
				<Products />
			</div>
		</div>
	);
};

export default page;
