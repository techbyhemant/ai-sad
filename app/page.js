import Products from "./home/Products";
import Categories from "./home/Categories";
import Stats from "./home/Stats";
import Values from "./home/Values";
import Services from "./home/Services";
import Testimonials from "./home/Testimonials";
import NewsAndArticles from "./home/NewsAndArticles";
import ProductFullWidth from "./home/ProductFullWidth";
import Locations from "./home/Locations";
import Footer from "./Footer";
//added comment
export default function Home() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <main className="w-full max-w-[1440px] mx-auto h-full">
        <Categories />
        <Products />
        <Values />
        <Stats />
        <Services />
        <Locations />
        <Testimonials />
        <NewsAndArticles />
        <ProductFullWidth />
      </main>
    </div>
  );
}
