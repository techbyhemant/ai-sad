import React from 'react';

const STATS = [
	{
		id: 1,
		value: 95,
		description: 'Success rate in delivering products',
		bg: 'bg-[#19417C]',
	},
	{ id: 2, value: 5, description: 'Wasetd materials', bg: 'bg-[#04724D]' },
	{
		id: 3,
		value: 98,
		description: 'Orders delivered on time',
		bg: 'bg-[#19417C]',
	},
];

const Stat = ({ bg, stat, description }) => {
	return (
		<div
			className={`flex flex-col items-center py-26 px-13 flex-1 h-full ${bg}`}
		>
			<h2 className="font-primary text-[84px] font-bold">{stat}%</h2>
			<p className="font-secondary text-2xl font-normal text-center">
				{description}
			</p>
		</div>
	);
};

const Stats = () => {
	return (
		<section className="flex items-center justify-stretch h-[374px]">
			{STATS.map((stat) => (
				<Stat
					key={stat.id}
					bg={stat.bg}
					stat={stat.value}
					description={stat.description}
				/>
			))}
		</section>
	);
};

export default Stats;
