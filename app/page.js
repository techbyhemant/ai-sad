import Footer from './home/Footer';
import Header from './home/Header';
import Products from './home/Products';
import Services from './home/Services';
import Stats from './home/Stats';
import Values from './home/Values';

export default function Home() {
	return (
		<div className="flex flex-col ">
			<Header />
			<main className="flex-1 max-w-[1240px] mx-auto w-full h-full">
				<Services />
				<Products />
				<Values />
				<Stats />
			</main>
			<Footer />
		</div>
	);
}
