import React from 'react';
import Hero from './components/Hero';
import BrandTimeline from './components/BrandTimeline';
import BrandValues from './components/BrandValues';

const page = () => {
	return (
		<div className="max-w-[1240px] mx-auto">
			<Hero />
			<BrandTimeline />
			<BrandValues />
		</div>
	);
};

export default page;
