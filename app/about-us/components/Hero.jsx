import Image from 'next/image';
import aboutUsImg from '../../../public/assets/images/about-us.jpg';
import logo from '../../../public/assets/logo-light.svg';

const Hero = () => {
	return (
		<div className="flex justify-center items-center h-full w-full relative">
			<Image
				src={aboutUsImg}
				alt="about us"
				className="object-contain h-full w-full"
			/>
			<div className="h-full w-full absolute bg-black opacity-50" />
			<Image src={logo} alt="Logo" className="absolute h-[340px] w-[453px]" />
		</div>
	);
};

export default Hero;
