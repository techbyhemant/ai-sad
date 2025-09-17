import Image from 'next/image';
import React from 'react';
import logoDark from '../../public/assets/logo-dark.svg';
import { NAVIGATION } from './const';
import { SearchIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
	return (
		<div className="bg-white hidden md:block">
			<header className="flex justify-between h-[82px] max-w-[1240px] mx-auto items-center pl-16 pr-6">
				<Image src={logoDark} alt="Logo" width="63" height="47.25" />
				<nav className="text-[#1e1e1e] font-secondary font-medium text-[18px] hidden sm:flex gap-10 items-center ">
					{NAVIGATION.map((item, idx) => (
						<p key={idx}>
							<a href={item.href}>{item.name}</a>
						</p>
					))}
					<Button variant="ghost" size="icon" className="size-6">
						<SearchIcon />
					</Button>
				</nav>
			</header>
		</div>
	);
};

export default Header;
