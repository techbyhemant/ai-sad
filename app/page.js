import { Button } from '@/components/ui/button';
import Header from './home/Header';
import Footer from './home/Footer';

export default function Home() {
	return (
		<div className="flex flex-col ">
			<Header />
			<main className="flex-1 max-w-[1240px] mx-auto w-full">
				<h1>Main Content</h1>
			</main>
			<Footer />
		</div>
	);
}
