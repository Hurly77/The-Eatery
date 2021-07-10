import { useState } from 'react';
import NavMap from './nav-map';
import { MenuBtn } from '@/ui/buttons';
import { Socials, LogoLink } from '@/ui/index.js';
import media from '@/data/media.js';

const Navbar = () => {
	const [hide, setHide] = useState(true);

	const handleClick = () => setHide(!hide);
	const clickAway = () => setHide(true);

	return (
		<>
			<nav className="2xl:px-52 xl:px:32 lg:px-20 xs:px-1 lg:flex lg:justify-end lg:px-4 w-full h-20 xs:justify-between text-white bg-bar z-50 sticky top-0 ...">
				<LogoLink />
				<NavMap
					hidden={hide}
					func={clickAway}
					inactive="items-center justify-center lg:px-4 lg:h-full flex w-full bg-bar hover:bg-light"
					active=" lg:pt-1 items-center justify-center lg:mb-1 lg:h-auto lg:px-4 flex w-full bg-blite hover:bg-warn cursor-not-allowed ...">
					<Socials
						icons={media}
						iconStyles="flex items-center justify-center text-2xl hover:text-black rounded-full h-3/4 w-full"
						bg="flex justify-center items-center xs:w-10 xs:h-10 bg-success rounded-full px-1 mx-1"
						flex="flex self-center justify-center lg:w-1/6 xs:w-full"
					/>
				</NavMap>
			</nav>
			<MenuBtn
				func={handleClick}
				name={!hide ? 'clear' : 'menu'}
				twind="lg:hidden xs:block text-white right-4 top-4 z-50 fixed ..."
			/>
		</>
	);
};

export default Navbar;
