import { RiScalesLine } from 'react-icons/ri';
import integrity from '../../../public/assets/icons/integrity.svg';
import commitment from '../../../public/assets/icons/commitment.svg';
import excellence from '../../../public/assets/icons/excellence.svg';
import innovation from '../../../public/assets/icons/innovation.svg';
import sustainability from '../../../public/assets/icons/sustainability.svg';
import teamwork from '../../../public/assets/icons/teamwork.svg';
import Image from 'next/image';

const TIMELINE_DATA = [
	{
		id: 1,
		icon: integrity,
		title: 'Integrity',
		description:
			'We believe in honest business practices and lasting relationships.',
	},
	{
		id: 2,
		icon: commitment,
		title: 'Customer Commitment',
		description:
			'We believe in honest business practices and lasting relationships.',
	},
	{
		id: 3,
		icon: excellence,
		title: 'Excellence',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. ',
	},
	{
		id: 4,
		icon: innovation,
		title: 'Innovation',
		description:
			'We believe in honest business practices and lasting relationships.',
	},
	{
		id: 5,
		icon: sustainability,
		title: 'Sustainability',
		description:
			'We believe in honest business practices and lasting relationships.',
	},
	{
		id: 6,
		icon: teamwork,
		title: 'Teamwork',
		description:
			'Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. ',
	},
];

const SimpleVerticalTimeline = () => {
	return (
		<div className="relative max-w-3xl mx-auto p-8">
			<div className="absolute left-1/2 top-0 h-full w-px bg-gray-300 transform -translate-x-1/2" />
			{TIMELINE_DATA.map((data, idx) => (
				<div key={data.id}>
					{idx % 2 === 0 ? (
						<div className="h-fit md:h-[130px] max-w-[153px] md:max-w-[450px] w-full relative -left-15 md:-left-70">
							<div className="flex items-center gap-[6px] md:gap-4 justify-end">
								<Image
									src={data.icon}
									alt={data.title}
									className="h-7 w-7 md:h-full md:w-full"
								/>
								<h5 className="font-secondary font-semibold text-md md:text-[32px]">
									{data.title}
								</h5>
							</div>
							<p className="text-right text-xs md:text-2xl">
								{data.description}
							</p>
							<div className="bg-white w-5 md:w-[106px] h-px absolute top-1/2 -right-[30px] md:-right-[40%]" />
						</div>
					) : (
						<div className="h-fit md:h-[130px] max-w-[153px] md:max-w-[450px] relative -right-38 md:-right-133 space-x-3">
							<div className="flex items-center gap-4 justify-start">
								<Image
									src={data.icon}
									alt={data.title}
									className="h-7 w-7 md:h-full md:w-full"
								/>
								<h5 className="font-secondary font-semibold text-md md:text-[32px]">
									{data.title}
								</h5>
							</div>
							<p className="text-left text-xs md:text-2xl">
								{data.description}
							</p>
							<div className="bg-white w-5 md:w-[106px] h-px absolute top-1/2 -left-[30px] md:-left-[40%]" />
						</div>
					)}
				</div>
			))}
		</div>
	);
};

export default SimpleVerticalTimeline;
