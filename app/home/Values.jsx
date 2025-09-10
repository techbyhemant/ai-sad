import React from 'react';
import { GrCodeSandbox } from 'react-icons/gr';
import { BiLeaf } from 'react-icons/bi';
import { BiUniversalAccess } from 'react-icons/bi';

const VALUES = [
	{
		id: 'integrity',
		icon: <BiUniversalAccess size={32} />,
		heading: 'Integrity',
		description:
			'We believe in honest business practices and lasting relationships.',
	},
	{
		id: 'innovation',
		icon: <GrCodeSandbox size={32} />,
		heading: 'Innovation',
		description:
			'We adapt to market needs, offering products and services that meet tomorrow’s demands.',
	},
	{
		id: 'sustainability',
		icon: <BiLeaf size={32} />,
		heading: 'Sustainability',
		description:
			'We promote eco-friendly products and responsible business practices to protect our environment for future generations.',
	},
];

const Value = ({ icon, heading, description }) => {
	return (
		<div className="flex flex-col gap-7">
			<div className="flex gap-3 items-center">
				{icon}
				<h5 className="font-primary font-bold text-[32px]">{heading}</h5>
			</div>
			<p className="text-xl">{description}</p>
		</div>
	);
};

const Values = () => {
	return (
		<section className="w-full p-[85px] pb-16 space-y-[159px]">
			<h3 className="font-primary font-bold text-4xl">What we stand for</h3>
			<div className="grid grid-flow-col auto-cols-auto gap-23 w-full">
				{VALUES.map((value) => (
					<Value
						key={value.id}
						icon={value.icon}
						heading={value.heading}
						description={value.description}
					/>
				))}
			</div>
		</section>
	);
};

export default Values;
