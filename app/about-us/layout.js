import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => {
	return (
		<>
			<div className="h-[82px] w-full bg-background backdrop-blur-md py-4 items-center fixed top-0 z-[100] hidden sm:block">
				<Header isWhite />
			</div>
			<main style={{ paddingTop: '82px' }}>{children}</main>
			<div className="py-10 px-4">
				<Footer />
			</div>
		</>
	);
};

export default Layout;
