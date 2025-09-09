import Image from 'next/image';
import { FaFacebookSquare } from 'react-icons/fa';
import { LuInstagram } from 'react-icons/lu';
import logoLight from '../../public/assets/logo-light.svg';
import FooterList from './FooterList';
import { NAVIGATION, PRODUCTS_LIST, SERVICES_LIST } from './const';
import PrimaryBtn from '../shared/Buttons/PrimaryBtn';

const Footer = () => {
	return (
		<footer className="max-w-[1240px] mx-auto w-full h-[535px] pt-[64px] pb-[80px]">
			<div className="flex justify-between gap-24 h-full">
				<div className="flex flex-col justify-between">
					<Image src={logoLight} alt="Logo" className="h-[143px] w-[191px]" />
					<div className="flex gap-10">
						<FaFacebookSquare
							className="outline-2 outline-offset-10 rounded-full"
							size={20}
						/>
						<LuInstagram
							className="outline-2 outline-offset-10 rounded-full"
							size={20}
						/>
					</div>
				</div>

				<div className="grid grid-flow-col auto-cols-auto gap-24">
					<FooterList heading="Products" items={PRODUCTS_LIST} />
					<FooterList heading="Services" items={SERVICES_LIST} />
					<FooterList heading="Pages" items={NAVIGATION} />
					<PrimaryBtn />
				</div>
			</div>
		</footer>
	);
};

export default Footer;
