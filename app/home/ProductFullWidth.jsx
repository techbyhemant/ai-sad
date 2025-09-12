'use client';

import productImg from '../../public/assets/images/product-1.jpg';
import product2 from '../../public/assets/images/pre-cast.jpg';
import PrimaryBtn from '../shared/Buttons/PrimaryBtn';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-fade';

const PRODUCTS = [
	{
		id: 1,
		image: productImg,
		title: 'Pre-cast concrete cladding tiles',
		onClick: () => {},
	},
	{
		id: 2,
		image: product2,
		title: 'Slide 2',
		onClick: () => {},
	},
	{
		id: 3,
		image: productImg,
		title: 'Slide 3',
		onClick: () => {},
	},
];
const Slide = ({ image, title, onClick }) => {
	return (
		<div
			style={{
				backgroundImage: `url(${image?.src})`,
				backgroundPosition: 'center',
				backgroundSize: 'cover',
			}}
			className="relative py-14 px-16 h-[400px]"
		>
			<div className="absolute inset-0 bg-gradient-to-bl from-black/50 via-black/30 to-black/0" />

			<div className="relative z-10 flex flex-col items-start gap-4 text-white max-w-[516px]">
				<p>New launch</p>
				<h3 className="text-4xl font-semibold max-w-[516px]">{title}</h3>
				<PrimaryBtn
					title="Know more"
					styles="bg-white text-black text-md font-normal font-secondary"
					onClick={onClick}
				/>
			</div>
		</div>
	);
};

const ProductFullWidth = () => {
	return (
		<Swiper
			modules={[EffectFade, Autoplay]}
			autoplay={{
				delay: 30_000,
			}}
			effect="fade"
			speed={2000}
			spaceBetween={10}
			slidesPerView={1}
			className="h-full"
		>
			{PRODUCTS.map((product) => (
				<SwiperSlide key={product.id} className="h-full">
					<Slide
						image={product?.image}
						title={product?.title}
						onClick={product.onClick}
					/>
				</SwiperSlide>
			))}
		</Swiper>
	);
};

export default ProductFullWidth;
