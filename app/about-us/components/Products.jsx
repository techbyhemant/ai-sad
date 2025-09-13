import React from 'react';
import building from '../../../public/assets/images/building.jpg';
import PrimaryBtn from '@/app/shared/Buttons/PrimaryBtn';

const Products = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${building.src})`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',
			}}
			className="py-[71px] px-[57px] h-[712px] w-full relative"
		>
			<div className="flex flex-col items-start gap-4 absolute z-10">
				<p className="font-secondary text-md">Get to know</p>
				<h4 className="font-secondary font-semibold text-4xl">BAONE</h4>
				<PrimaryBtn title="Know more" styles="bg-white text-primary" />
			</div>
			<div className="bg-[#04724D] h-full w-1/2 absolute right-0 top-0 z-10">
                
            </div>
			<div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black to-white/0"></div>
		</div>
	);
};

export default Products;
