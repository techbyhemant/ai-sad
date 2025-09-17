import { Button } from '@/components/ui/button';
import React from 'react';

const PrimaryBtn = ({ title, styles, onClick, ...props }) => {
	return (
		<Button
			className={`font-secondary bg-primary-green rounded-full py-2.5 px-4 md:py-3 md:px-6 text-sm md:text-md ${styles}`}
			onClick={onClick}
			{...props}
		>
			{title}
		</Button>
	);
};

export default PrimaryBtn;
