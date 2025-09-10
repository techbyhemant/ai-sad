import Footer from './home/Footer';
import Header from './home/Header';
import Products from './home/Products';
import Categories from './home/Categories';
import Stats from './home/Stats';
import Values from './home/Values';
import Services from './home/Services';
import Testimonials from './home/Testimonials';
import NewsAndArticles from './home/NewsAndArticles';
import ProductFullWidth from './home/ProductFullWidth';

export default function Home() {
	return (
		<div className="flex flex-col ">
			<Header />
			<main className="flex-1 max-w-[1240px] mx-auto w-full h-full">
				<Categories />
				<Products />
				<Values />
				<Stats />
				<Services />
				<Testimonials />
				<NewsAndArticles />
				<ProductFullWidth />
			</main>
			<Footer />
		</div>
	);
}
