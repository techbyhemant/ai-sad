'use client';

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from 'react-icons/md';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Button } from '@/components/ui/button';

const TESTIMONIALS = [
	{
		id: 1,
		name: 'Imran Sheikh',
		designation: 'Project Manager, Gulf Urban Developers',
		description:
			"Al Sad’s in-house products exceeded our expectations in both quality and price. Their team understood our project needs perfectly, delivered on time, and the materials performed flawlessly. They've become our go-to supplier for every build.",
	},
	{
		id: 2,
		name: 'Priya Nair',
		designation: 'Interior Designer, Studio Forma',
		description:
			'“From customer support to product quality, Al Sad delivers excellence. Their in-house materials matched our specifications exactly, and their knowledge helped us avoid costly delays. We trust them completely for all our hardware and fittings.”',
	},
	{
		id: 3,
		name: 'Mohammed Al Tayer',
		designation: 'Procurement Head, Al Noor Contracting',
		description: `“We’ve worked with many suppliers, but Al Sad stands out. Their own product line is top-notch — durable, consistent, and affordable. Their service is personal and reliable, which makes all the difference on tight timelines.”`,
	},
];

const Testimonial = ({ name, designation, description }) => {
	return (
		<div className="flex flex-col gap-4 items-start text-black">
			<p className="text-md font-secondary text-primary">Testimonials</p>
			<div>
				<h3 className="text-4xl text-[#04724D] font-semibold font-primary">
					{name}
				</h3>
				<p className="text-sm font-normal">{designation}</p>
			</div>
			<p className="text-md font-normal">{description}</p>
		</div>
	);
};

const Testimonials = () => {
	const swiperRef = useRef(null);

	return (
		<section className="bg-white w-full h-[323px] p-20 relative">
			<div className="absolute top-1/2 left-15 transform -translate-y-1/2 z-20">
				<MdKeyboardArrowLeft
					className="text-black cursor-pointer"
					size={40}
					onClick={() => swiperRef.current?.slidePrev()}
				/>
			</div>
			<div className="absolute top-1/2 right-15 transform -translate-y-1/2 z-20">
				<MdKeyboardArrowRight
					className="text-black cursor-pointer"
					size={40}
					onClick={() => swiperRef.current?.slideNext()}
				/>
			</div>

			<Swiper
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				onSwiper={(swiper) => {
					swiperRef.current = swiper;
				}}
				className="max-w-4xl"
			>
				{TESTIMONIALS.map((testimonial) => (
					<SwiperSlide key={testimonial.id}>
						<Testimonial
							name={testimonial.name}
							designation={testimonial.designation}
							description={testimonial.description}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Testimonials;
