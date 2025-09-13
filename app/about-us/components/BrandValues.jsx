'use client';

import Image from 'next/image';
import React from 'react';
import logo from '../../../public/assets/logo-light.svg';
import SimpleVerticalTimeline from './SimpleTimeline';
import people from '../../../public/assets/images/people.jpg';

const BrandValues = () => {
	return (
		<div className="flex flex-col items-center p-10 gap-20">
			<Image src={logo} alt="Logo White" className="h-[257px] w-[340px]" />
			<div className="space-y-5">
				<SimpleVerticalTimeline />
				<div className="flex flex-col items-center space-y-8">
					<Image
						src={people}
						alt="People"
						className="h-[554px] w-svw object-cover object-top"
					/>
					<p className="text-center w-[70%] text-lg font-secondary">
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
