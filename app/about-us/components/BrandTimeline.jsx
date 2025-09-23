'use client';

import { useEffect, useRef, useState } from 'react';

import map from '../../../public/assets/images/map-gray.png';
import timelineOne from '../../../public/assets/images/timeline-1.jpg';
import timelineTwo from '../../../public/assets/images/timeline-2.jpg';
import timelineThree from '../../../public/assets/images/timeline-3.jpg';
import timelineFour from '../../../public/assets/images/timeline-4.jpg';
import timelineFive from '../../../public/assets/images/timeline-5.jpg';
import timelineSix from '../../../public/assets/images/timeline-6.jpg';

import Image from 'next/image';

const TIMELINE = [
	{
		id: 1,
		title: 'Established in year 1994',
		description: 'Al Sad Building Material LLC, Al Sabkha St,Deira Dubai - UAE',
		image: [
			{ src: timelineOne, position: 'top-40 left-10' },
			{ src: timelineTwo, position: 'top-10 right-5' },
		],
		imageDes: '',
	},
	{
		id: 2,
		title: '2nd Branch in 1998',
		description:
			'Al Sad Building Material LLC,Br Nakheel St, Naif Road Deira Dubai - UAE',
		image: [{ src: timelineThree, position: 'top-80 left-10' }],
		imageDes:
			'We were the leading importer & supplier for Brass Product (made in India)',
	},
	{
		id: 3,
		title: '3rd Branch in 2004',
		description: 'Al Sad Building Material LLC,Br Al Quoz Industrial Area 3',
		image: [{ src: timelineFour, position: '-bottom-25 right-40' }],
		imageDes:
			'Our first 3000sq Shop cum Store and one of the first few shop in Al Quoz  Ind 3',
	},
	{
		id: 4,
		title: '4th Branch in 2007',
		description:
			'Al Sad Al Jadid Building Material LLC, Al Quoz Industrial Area 4',
		image: [{ src: timelineFive, position: 'top-50 -left-4' }],
		imageDes:
			'We became one of leading importer from India, China and stocklist from Germany & Turkey',
	},
	{
		id: 5,
		title: '5th Branch in 2024',
		description:
			'Al Sad Al Arabi Building Material LLC, Dubai Investment Park 2',
		image: [{ src: timelineSix, position: '-bottom-25 right-0' }],
		imageDes: 'Our first 10000Sq Shop cum Store',
	},
];

const BrandTimeline = () => {
	const [activeEventId, setActiveEventId] = useState(1);
	const [activeEvent, setActiveEvent] = useState(null);

	// horizontal scroll state
	const [active, setActive] = useState(0);
	const itemsRef = useRef([]);
	const containerRef = useRef(null);

	const getActiveEvent = () => {
		const activeEvent = TIMELINE.find((evt) => evt.id === activeEventId);
		setActiveEvent(activeEvent);
	};

	useEffect(() => {
		activeEventId && getActiveEvent();
	}, [activeEventId]);

	const handleSlideClick = (index) => {
		setActive(index);
		itemsRef.current[index]?.scrollIntoView({
			behavior: 'smooth',
			inline: 'end',
			block: 'nearest',
		});
	};

	useEffect(() => {
		if (!containerRef.current) return;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						const index = Number(entry.target.getAttribute('data-index'));
						setActive(index);
					}
				});
			},
			{
				root: containerRef.current,
				threshold: 0.6,
			}
		);

		itemsRef.current.forEach((item) => {
			if (item) observer.observe(item);
		});

		return () => observer.disconnect();
	}, []);

	return (
		<>
			<div className="hidden md:flex py-5 pl-[77px] p-10 pr-0 w-full flex-nowrap">
				{/* Vertical Timeline */}
				<div className="flex flex-col items-start p-8 pr-0 w-fit">
					<ul className="list-disc! marker:text-2xl space-y-12! relative">
						<div className="w-px bg-white h-full absolute -left-[19px]" />
						{TIMELINE.map((timeline, index) => (
							<li
								key={timeline.id}
								className={`cursor-pointer w-[329px] ${
									activeEventId === timeline?.id ? 'opacity-100' : 'opacity-25!'
								}`}
								onClick={() => setActiveEventId(timeline?.id)}
							>
								<h4 className="font-secondary text-[28px] font-bold!">
									{timeline.title}
								</h4>
								<p className="text-xl mt-3">{timeline.description}</p>
							</li>
						))}
					</ul>
				</div>

				<div className="relative! w-1/2 h-[630px] flex-1">
					<Image
						src={map}
						alt="Timeline map"
						className="object-contain absolute h-full w-full"
					/>
					<div className="absolute top-0 bg-gradient-to-r from-[#0e2143]/90 via-[#0e2143]/70 to-white/0 h-full w-full" />

					{activeEvent && (
						<div className="w-full h-full absolute">
							{activeEvent.imageDes && (
								<div className="bg-[#19417C] rounded-tl-sm rounded-bl-sm p-6 w-[569px] absolute right-0 top-10">
									<p className="font-secondary font-semibold text-2xl text-right">
										{activeEvent?.imageDes}
									</p>
								</div>
							)}
							{activeEvent.image.map((img, idx) => (
								<div
									key={idx}
									className={`bg-white w-[300px] h-[200px] p-2 rounded-sm absolute ${img?.position}`}
								>
									<Image
										src={img.src}
										alt="Timeline Photo"
										className="h-[150px] w-full object-cover"
									/>
								</div>
							))}
						</div>
					)}
				</div>
			</div>

			{/* Horizontal Timeline */}
			<div className="w-screen md:hidden py-14 space-y-7 relative">
				<div className="">
					<ul
						ref={containerRef}
						className="flex overflow-x-auto scrollbar-hide flex-nowrap gap-4 scroll-smooth snap-x snap-mandatory relative"
					>
						{TIMELINE.map((tl, idx) => (
							<li
								key={idx}
								data-index={idx}
								ref={(el) => (itemsRef.current[idx] = el)}
								onClick={() => handleSlideClick(idx)}
								className={`flex-shrink-0 flex flex-col gap-6 justify-start items-start snap-start h-full after:content-[''] after:bottom-2 after:w-[15px] after:h-[15px] after:rounded-full after:bg-white after:float-left px-4 ${
									active !== idx ? 'opacity-25' : 'opacity-100'
								} transition-all ease-in-out`}
							>
								<Image
									src={tl.image[0]['src']}
									alt="Timeline Photo"
									className="w-[302px] h-[201px] object-cover rounded-sm"
								/>
								<div className="space-y-2">
									<h4 className="font-primary font-semibold text-xl">
										{tl.title}
									</h4>
									<p className="font-normal text-sm w-[302px]">
										{tl.description}
									</p>
								</div>
							</li>
						))}
					</ul>
					<div className="bg-white h-px w-full relative bottom-[8px] left-0" />
				</div>
				{TIMELINE[active]?.imageDes && (
					<div className="px-4">
						<p className="bg-light-blue text-sm italic font-semibold p-3 rounded-sm text-center">
							{TIMELINE[active]?.imageDes}
						</p>
					</div>
				)}
			</div>
		</>
	);
};

export default BrandTimeline;
