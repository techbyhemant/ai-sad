import { Button } from '@/components/ui/button';
import React from 'react';

const PrimaryBtn = ({ title, styles, onClick, ...props }) => {
	return (
		<Button
			className={`font-secondary bg-[#04724D] rounded-full py-3 px-6 text-md ${styles}`}
			onClick={onClick}
			{...props}
		>
			{title}
		</Button>
	);
};

export default PrimaryBtn;
