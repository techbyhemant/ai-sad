import React from 'react';

const FooterList = ({ heading, items }) => {
	return (
		<div className="flex flex-col gap-6">
			<h6 className="font-secondary text-xs text-[#d3d8de]">{heading}</h6>
			<ul className="font-secondary text-sm">
				{items.map((item) => (
					<li key={item.name} className="py-1.5">
						{item.name}
					</li>
				))}
			</ul>
		</div>
	);
};

export default FooterList;
