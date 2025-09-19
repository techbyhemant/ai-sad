import Image from 'next/image';
import React from 'react';
import people from '../../../public/assets/images/people-2.jpg';
import PrimaryBtn from '@/app/shared/Buttons/PrimaryBtn';

const PEOPLE = [
	{
		id: 1,
		name: 'Name of person',
		designation: 'designation',
		image: people,
	},
	{
		id: 2,
		name: 'Name of person',
		designation: 'designation',
		image: people,
	},
	{
		id: 3,
		name: 'Name of person',
		designation: 'designation',
		image: people,
	},
	{
		id: 4,
		name: 'Name of person',
		designation: 'designation',
		image: people,
	},
];
const People = () => {
	return (
		<div className="py-10 px-4 md:p-20 w-screen md:w-full space-y-4 md:space-y-9">
			<div className="flex items-center justify-between w-full">
				<h3 className="text-xl md:text-5xl font-semibold font-primary">
					People of Al Sad
				</h3>
				<PrimaryBtn title="View more" />
			</div>
			<div className="flex gap-4 md:gap-15 overflow-x-auto w-full scrollbar-hide scroll-smooth snap-x snap-mandatory">
				{PEOPLE.map((p) => (
					<div className="space-y-3 flex-shrink-0 snap-center" key={p.id}>
						<Image
							src={p.image}
							alt="People"
							className="w-[179px] md:w-[264px] h-[164px] md:h-[px] object-cover rounded-md"
							priority
						/>
						<div className="text-center">
							<h5 className="font-primary font-semibold text-md">{p.name}</h5>
							<p className="text-xs font-normal">{p.designation}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default People;
