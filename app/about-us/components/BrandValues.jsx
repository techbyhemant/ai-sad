'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo-light.svg';
import SimpleVerticalTimeline from './SimpleTimeline';
import people from '../../../public/assets/images/people.jpg';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BrandValues = () => {
	useGSAP(() => {
		gsap.fromTo(
			'#brand-value',
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
				scrollTrigger: {
					trigger: '#brand-value',
					start: 'top 80%',
					end: 'bottom 20%',
					toggleActions: 'play reverse play reverse',
				},
			}
		);
	});

	return (
		<div className="flex flex-col items-center p-10 gap-20 bg-gradient-to-b from-primary via-light-blue to-light-blue">
			<Image
				src={logo}
				alt="Logo White"
				className="object-cover h-[100px] w-[133px] md:h-[257px] md:w-[343px]"
				id="brand-value"
			/>
			<div className="space-y-5">
				<SimpleVerticalTimeline />
				<div className="flex flex-col items-center space-y-8">
					<Image
						src={people}
						alt="People"
						className="h-[139px] md:h-[554px] w-[316px] md:w-[1250px] rounded-sm object-fill"
					/>
					<p className="sm:max-w-[997px] text-center w-full text-sm md:text-lg font-secondary">
						Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa
						mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien
						fringilla, mattis ligula consectetur, ultrices mauris. Maecenas
						vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor
						ornare leo, non suscipit magna interdum eu. Curabitur pellentesque
						nibh nibh, at maximus ante fermentum sit amet.
					</p>
				</div>
			</div>
		</div>
	);
};

export default BrandValues;
