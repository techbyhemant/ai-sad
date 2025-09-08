import { Button } from '@/components/ui/button';
import Header from './home/Header';
import Footer from './home/Footer';

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen">
			<Header />
			<main className="flex-1 max-w-[1240px] mx-auto bg-red-200 w-full">
				<h1>Main Content</h1>
			</main>
			<Footer />
		</div>
	);
}
