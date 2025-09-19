'use client';

import Image from 'next/image';

import serOne from '../../public/assets/images/service-1.jpg';
import serTwo from '../../public/assets/images/service-2.jpg';
import serThree from '../../public/assets/images/service-3.jpg';
import PrimaryBtn from '../shared/Buttons/PrimaryBtn';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { Mousewheel, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const SERVICES = [
	{
		id: 1,
		heading: 'Trading, Import/Export Capabilities',
		image: serOne,
		description:
			'Al Sad Building Material L.L.C offers extensive trading and import/export services, sourcing quality materials from trusted global partners. Our experience ensures timely procurement, competitive pricing, and full compliance with international standards. Whether it’s a specific product or bulk order, we deliver with precision and reliability. With decades of industry knowledge and a strong global network, we help businesses access the materials they need — efficiently and affordably — across the Middle East and beyond.',
	},
	{
		id: 2,
		heading: 'Warehousing & Logistics Support',
		image: serTwo,
		description:
			"Our central warehouse in Al Quoz, Dubai, provides organized, secure storage and fast dispatch of materials. Backed by an efficient logistics network, we ensure timely deliveries across the UAE and surrounding regions. From inventory management to last-mile delivery, our team handles every detail with care. Whether you're sourcing materials for a project or managing stock for your store, Al Sad’s warehousing and logistics services keep your operations running smoothly and without delays.",
	},
	{
		id: 3,
		heading: 'Bulk Supply & Retail Support',
		image: serThree,
		description:
			'Al Sad supports both large construction projects and retail outlets with tailored supply solutions. Our bulk services ensure consistent stock for contractors and developers, while retail partners benefit from curated selections, merchandising support, and timely restocking. We understand the pace and pressure of the industry, and our responsive service helps you stay ahead. Whether supplying a job site or storefront, Al Sad delivers reliability, flexibility, and the personal touch that defines our legacy.',
	},
];

const Service = ({ heading, image, description }) => {
	return (
		<div className="flex flex-col sm:flex-row gap-5 md:gap-12 w-full h-full text-black">
			<div className="w-full sm:w-1/2 flex-1 h-[204px] sm:h-full">
				<Image
					src={image}
					alt={heading}
					className="object-cover h-full w-full rounded-sm"
				/>
			</div>
			<div className="w-full sm:w-1/2 flex flex-col md:justify-between items-start gap-3 sm:gap-20 h-full">
				<div className="min-w-full space-y-3">
					<p className="uppercase text-xs sm:text-[18px] font-normal">
						Services we offer
					</p>
					<div className="border-b-1 border-[#6E6E6E]" />
				</div>

				<div className="space-y-3 sm:space-y-5">
					<h2 className="text-xl sm:text-4xl font-bold font-primary">
						{heading}
					</h2>
					<p className="text-sm sm:text-xl font-normal">{description}</p>
				</div>

				<PrimaryBtn
					title="View more"
					styles="bg-light-blue hover:bg-blue-800"
					onClick={() => {}}
				/>
			</div>
		</div>
	);
};

const Services = () => {
	return (
		<section className="pt-10 pb-5 px-4 md:py-28 md:px-16 w-full h-[612px] sm:h-[840px] bg-white">
			<Swiper
				direction="vertical"
				modules={[Mousewheel]}
				mousewheel={true}
				pagination={{ clickable: true }}
				spaceBetween={10}
				slidesPerView={1}
				className="h-full"
			>
				{SERVICES.map((service) => (
					<SwiperSlide key={service.id} className="h-full">
						<Service
							image={service.image}
							heading={service.heading}
							description={service.description}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</section>
	);
};

export default Services;
