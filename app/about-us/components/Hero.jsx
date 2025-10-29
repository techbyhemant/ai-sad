'use client';

import Image from 'next/image';
import aboutUsImg from '../../../public/assets/images/about-us.jpg';
import logo from '../../../public/assets/logo-light.svg';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

const Hero = () => {
	useGSAP(() => {
		const tl = gsap.timeline();

		tl.to('#logo', {
			scale: 10,
			opacity: 0,
			display: 'none',
			duration: 1,
			delay: 0.3,
		}).fromTo(
			'#intro',
			{ opacity: 0 },
			{
				opacity: 1,
				y: -10,
				duration: 0.8,
			}
		);
	});

	return (
		<div className="flex flex-col justify-center items-center h-screen w-full relative">
			<Image
				src={aboutUsImg}
				alt="about us"
				className="object-cover h-full w-full"
			/>
			{/* overlay */}
			<div className="h-full w-full absolute bg-black opacity-50" />
			<div className="absolute h-full w-full flex flex-col justify-between p-4">
				<div className="flex-1 flex items-center justify-center">
					<Image
						src={logo}
						alt="Logo"
						className="h-[136px] sm:h-[340px] w-[453px]"
						id="logo"
					/>
				</div>
				<div
					className="relative bottom-5 left-3 sm:left-[10%] right-0 bg-primary py-5 px-4 sm:p-10 space-y-3  rounded-sm sm:rounded-[12px] w-[362px] sm:w-[1090px]"
					id="intro"
				>
					<h4 className="font-primary font-semibold text-xl sm:text-4xl">
						Who are we
					</h4>
					<p className="text-sm sm:text-xl">
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

export default Hero;
