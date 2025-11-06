'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import logoDark from '../../public/assets/logo-dark.svg';
import logoLight from '../../public/assets/logo-light.svg';
import { SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { GiHamburgerMenu } from 'react-icons/gi';

export const NAV_ITEMS = [
	{ name: 'Home', path: '/' },
	{ name: 'About us', path: '/about-us' },
	{ name: 'Products', path: '/products' },
	{ name: 'Blogs', path: '/blogs' },
	{ name: 'Contact us', path: '/contact-us' },
];

const Header = ({ isDarkBackground }) => {
	const [expand, setExpand] = useState(false);
	const isDesktop = typeof window !== 'undefined' && window.innerWidth >= 640;
	const useLightLogo = isDesktop ? isDarkBackground : false;
	const textColor = useLightLogo ? 'text-white' : 'text-black';

	const toggleMenu = () => setExpand((prev) => !prev);

	return (
		<header
			className={`${
				isDesktop && isDarkBackground ? 'bg-transparent' : 'bg-white'
			} px-4 py-3 sm:pl-16 sm:pr-6 flex flex-col flex-1 h-full`}
		>
			<div className="flex justify-between max-w-full items-center">
				<Image
					src={useLightLogo ? logoLight : logoDark}
					alt="Logo"
					width={63}
					height={47.25}
				/>
				<nav
					className={`
						${textColor}
					} font-secondary font-medium text-[18px] flex gap-10 items-center`}
				>
					<div className="hidden sm:flex gap-10">
						{NAV_ITEMS.map((item, idx) => (
							<Link href={item?.path} key={idx}>
								{item.name}
							</Link>
						))}
					</div>
					<Button variant="ghost" size="icon" className="size-6">
						<SearchIcon />
					</Button>
					<GiHamburgerMenu
						size={20}
						className="text-black sm:hidden"
						onClick={toggleMenu}
					/>
				</nav>
			</div>
			{!isDesktop && (
				<div
					className={`text-primary text-lg font-medium ${
						expand ? 'flex' : 'hidden'
					} flex flex-col items-end gap-3 transition-all ease-in pt-4`}
				>
					{NAV_ITEMS.map((item, idx) => (
						<Link href={item?.path} key={idx}>
							{item.name}
						</Link>
					))}
				</div>
			)}
		</header>
	);
};

export default Header;
