'use client';

import { useEffect, useState } from 'react';
import catOne from '../../public/assets/images/cat-1.jpg';
import catTwo from '../../public/assets/images/cat-2.jpg';
import catThree from '../../public/assets/images/cat-3.jpg';
import catFour from '../../public/assets/images/cat-4.jpg';
import catFive from '../../public/assets/images/cat-5.jpg';
import catSix from '../../public/assets/images/cat-6.jpg';
import {
	Collapsible,
	CollapsibleContent,
	CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';
import {
	MdOutlineKeyboardArrowDown,
	MdOutlineKeyboardArrowUp,
} from 'react-icons/md';

const serviceCategories = [
	{
		id: 'architectural',
		title: 'Architectural Components',
		backgroundImage: catOne,
		dropdown: [
			{
				title: 'Architecture Hardware',
				items: [
					{ title: 'Door Control', to: '' },
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
					{ title: 'Door Bolts', to: '' },
					{ title: 'Door Security', to: '' },
					{ title: 'Door Stoppers', to: '' },
					{ title: 'Door Accessories', to: '' },
					{ title: 'Door Locks', to: '' },
					{ title: 'Door Holes', to: '' },
				],
			},
			{
				title: 'Furniture Hardware',
				items: [
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
				],
			},
			{
				title: 'Glass Hardware',
				items: [{ title: 'Door Hinges', to: '' }],
			},
			{
				title: 'Aluminium Hardware',
				items: [],
			},
		],
	},
	{
		id: 'structural',
		title: 'Structural Materials',
		backgroundImage: catTwo,
		dropdown: [
			{
				title: 'Architecture Hardware',
				items: [
					{ title: 'Door Control', to: '' },
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
					{ title: 'Door Bolts', to: '' },
					{ title: 'Door Security', to: '' },
					{ title: 'Door Stoppers', to: '' },
					{ title: 'Door Accessories', to: '' },
					{ title: 'Door Locks', to: '' },
					{ title: 'Door Holes', to: '' },
				],
			},
			{
				title: 'Furniture Hardware',
				items: [
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
				],
			},
			{
				title: 'Glass Hardware',
				items: [{ title: 'Door Hinges', to: '' }],
			},
			{
				title: 'Aluminium Hardware',
				items: [],
			},
		],
	},
	{
		id: 'retail-home',
		title: 'Retail & Home Solutions',
		backgroundImage: catThree,
		dropdown: [
			{
				title: 'Architecture Hardware',
				items: [
					{ title: 'Door Control', to: '' },
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
					{ title: 'Door Bolts', to: '' },
					{ title: 'Door Security', to: '' },
					{ title: 'Door Stoppers', to: '' },
					{ title: 'Door Accessories', to: '' },
					{ title: 'Door Locks', to: '' },
					{ title: 'Door Holes', to: '' },
				],
			},
			{
				title: 'Furniture Hardware',
				items: [
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
				],
			},
			{
				title: 'Glass Hardware',
				items: [{ title: 'Door Hinges', to: '' }],
			},
			{
				title: 'Aluminium Hardware',
				items: [],
			},
		],
	},
	{
		id: 'electrical',
		title: 'Electrical & Plumbing Solutions',
		backgroundImage: catFour,
		dropdown: [
			{
				title: 'Architecture Hardware',
				items: [
					{ title: 'Door Control', to: '' },
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
					{ title: 'Door Bolts', to: '' },
					{ title: 'Door Security', to: '' },
					{ title: 'Door Stoppers', to: '' },
					{ title: 'Door Accessories', to: '' },
					{ title: 'Door Locks', to: '' },
					{ title: 'Door Holes', to: '' },
				],
			},
			{
				title: 'Furniture Hardware',
				items: [
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
				],
			},
			{
				title: 'Glass Hardware',
				items: [{ title: 'Door Hinges', to: '' }],
			},
			{
				title: 'Aluminium Hardware',
				items: [],
			},
		],
	},
	{
		id: 'specials',
		title: 'Specials',
		backgroundImage: catSix,
		dropdown: [
			{
				title: 'Architecture Hardware',
				items: [
					{ title: 'Door Control', to: '' },
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
					{ title: 'Door Bolts', to: '' },
					{ title: 'Door Security', to: '' },
					{ title: 'Door Stoppers', to: '' },
					{ title: 'Door Accessories', to: '' },
					{ title: 'Door Locks', to: '' },
					{ title: 'Door Holes', to: '' },
				],
			},
			{
				title: 'Furniture Hardware',
				items: [
					{ title: 'Door Hinges', to: '' },
					{ title: 'Door Handle', to: '' },
				],
			},
			{
				title: 'Glass Hardware',
				items: [{ title: 'Door Hinges', to: '' }],
			},
			{
				title: 'Aluminium Hardware',
				items: [],
			},
		],
	},
];

const List = ({ items, onClick, category }) => {
	return (
		<ul className="space-y-10">
			{items.map((item, idx) => (
				<li
					key={idx}
					className={`text-xl ${
						category === item?.title ? 'font-semibold' : 'font-normal'
					} font-secondary text-wrap`}
					onClick={() => onClick(item.title)}
				>
					{item?.title}
				</li>
			))}
		</ul>
	);
};

const TruncatedList = ({ items, onClick, category }) => {
	const MAX_ITEMS = 7;
	return (
		<ul className="space-y-1">
			{items.slice(0, MAX_ITEMS + 1).map((item, idx) => (
				<li
					key={idx}
					className={`text-md sm:text-lg ${
						category === item?.title ? 'font-semibold' : 'font-normal'
					} font-secondary text-wrap`}
					onClick={() => onClick(item?.to || item.title)}
				>
					{item?.title}
				</li>
			))}

			{items.length > MAX_ITEMS && (
				<p className="underline font-secondary font-medium mt-2 sm:mt-10">
					Show all
				</p>
			)}
		</ul>
	);
};

const Categories = () => {
	const [expandedSection, setExpandedSection] = useState(null);
	const [activeCategory, setActiveCategory] = useState(null);
	const [items, setItems] = useState([]);

	const handleSectionClick = (categoryId) => {
		const category = serviceCategories.find((cat) => cat.id === categoryId);
		if (category?.dropdown) {
			setExpandedSection(expandedSection === categoryId ? null : categoryId);
			setActiveCategory(null);
			setItems([]);
		}
	};

	useEffect(() => {
		getCategoryItems();
	}, [activeCategory]);

	useEffect(() => {
		if (expandedSection) {
			const category = serviceCategories.find(
				(cat) => cat.id === expandedSection
			);
			console.log(category);
			setActiveCategory(category?.dropdown[0]?.title);
		}
	}, [expandedSection]);
	const getCategoryItems = () => {
		const category = serviceCategories.filter(
			(cat) => cat.id === expandedSection
		)[0];
		const catItems = category?.dropdown?.filter(
			(item) => item.title === activeCategory
		)[0]?.items;
		setItems(catItems || []);
	};

	return (
		<section className="relative w-full overflow-hidden">
			<div className="hidden sm:flex h-[773px]">
				{serviceCategories.map((category) => (
					<div
						key={category.id}
						className={`relative cursor-pointer overflow-hidden transition-all duration-500 ${
							expandedSection === category.id
								? 'flex-[2]'
								: expandedSection
								? 'flex-[0.3]'
								: 'flex-1'
						}`}
					>
						{expandedSection === category.id ? (
							<div className="grid grid-flow-col-dense h-full w-full bg-[#19417c]">
								{/* Column 1 */}
								<div
									className="relative h-full max-w-[77px]"
									onClick={() => handleSectionClick(category.id)}
								>
									<h3 className="absolute bottom-3 left-20 font-bold leading-tight origin-bottom-left transform -rotate-90 text-4xl -translate-y-10 whitespace-nowrap text-white">
										{category.title}
									</h3>
									<div className="absolute -right-10 bottom-[25px] h-[80%] w-[1px] bg-white" />
								</div>

								{/* Column 2 */}
								<div className="flex-1 flex items-end justify-center pr-4 pl-5 pb-10">
									<List
										items={category?.dropdown}
										onClick={(title) => setActiveCategory(title)}
										category={activeCategory}
									/>
								</div>

								{items.length !== 0 && (
									<div className="flex items-end justify-center px-4 pb-10 relative">
										<div className="absolute left-0 bottom-[25px] h-[80%] w-[1px] bg-white" />
										<TruncatedList items={items} onClick={() => {}} />
									</div>
								)}
							</div>
						) : (
							<>
								<div
									style={{
										background: `url(${category.backgroundImage.src})`,
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
										backgroundPosition: 'center',
									}}
									className="absolute inset-0 transition-transform duration-300 hover:scale-110"
								/>

								<div
									className="relative h-full w-full flex items-end"
									onClick={() => handleSectionClick(category.id)}
								>
									<h3 className="absolute bottom-3 left-20 font-bold transition-all duration-300 origin-bottom-left transform -rotate-90 text-4xl pl-9 text-nowrap">
										{category.title}
									</h3>
								</div>
							</>
						)}
					</div>
				))}
			</div>

			<div className="sm:hidden w-screen bg-light-blue">
				<Collapsible
					className="flex w-full flex-col"
					onOpenChange={(open) => {
						if (!open && expandedSection !== null) {
							setExpandedSection(null);
							setActiveCategory(null);
							setItems([]);
						}
					}}
				>
					{serviceCategories.map((cat) => (
						<div
							className={`border-b-1 w-full px-4 py-2 ${
								expandedSection === cat.id ? 'bg-light-blue' : 'bg-primary'
							}`}
							key={cat.id}
						>
							<CollapsibleTrigger
								className="my-3 w-full"
								onClick={() => setExpandedSection(cat.id)}
							>
								<div className="flex items-center justify-between w-full">
									<h3 className="text-xl font-semibold font-primary">
										{cat.title}
									</h3>
									{expandedSection === cat.id ? (
										<MdOutlineKeyboardArrowUp className="size-8" />
									) : (
										<MdOutlineKeyboardArrowDown className="size-8" />
									)}
									<span className="sr-only">Toggle</span>
								</div>
							</CollapsibleTrigger>
							{expandedSection === cat.id && (
								<CollapsibleContent>
									<div className="overflow-hidden w-full space-y-5">
										<div className="flex gap-4 w-full overflow-x-auto scrollbar-hide text-white">
											{cat.dropdown.map((dp) => (
												<h5
													key={dp.title}
													className={`py-1 px-3 rounded-full  text-sm text-nowrap ${
														activeCategory === dp.title
															? 'bg-white text-primary'
															: 'bg-transparent text-white'
													}`}
													onClick={() => {
														setActiveCategory(dp.title);
														setItems(dp.items);
													}}
												>
													{dp.title}
												</h5>
											))}
										</div>
										<div className="px-3 pb-4">
											<TruncatedList items={items} />
										</div>
									</div>
								</CollapsibleContent>
							)}
						</div>
					))}
				</Collapsible>
			</div>
		</section>
	);
};

export default Categories;
