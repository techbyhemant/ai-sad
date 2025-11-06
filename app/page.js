'use client';

import Products from './home/Products';
import Categories from './home/Categories';
import Stats from './home/Stats';
import Values from './home/Values';
import Services from './home/Services';
import Testimonials from './home/Testimonials';
import NewsAndArticles from './home/NewsAndArticles';
import ProductFullWidth from './home/ProductFullWidth';
import Locations from './home/Locations';
import Footer from './Footer';
import Header from './Header';

import SplashScreen from './components/Splash';
import { useState } from 'react';

export default function Home() {
	const [mounted, setMounted] = useState(false);

	return (
		<>
			{!mounted ? (
				<>
					<div className="h-max sm:h-[85px] w-full bg-white  backdrop-blur-md flex items-center fixed top-0 z-[100]">
						<Header />
					</div>
					<main className="flex flex-col flex-1 justify-start items-center relative min-h-screen mt-[75px] sm:mt-[85px] overflow-x-hidden">
						<div className="w-full mx-auto h-full">
							<Categories />
							<Products />
							<Values />
							<Stats />
							<Services />
							<Locations />
							<Testimonials />
							<NewsAndArticles />
							<ProductFullWidth />
						</div>
					</main>
					<div className="py-10 px-4">
						<Footer />
					</div>
				</>
			) : (
				<SplashScreen />
			)}
		</>
	);
}
