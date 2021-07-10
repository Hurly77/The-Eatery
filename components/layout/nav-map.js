import NavLink from '@/components/layout/nav-link';
import links from '../../DATA/links';
import { useRouter } from 'next/router';

const NavMap = ({
	hidden = false,
	children,
	inactive,
	active,
	func = null,
}) => {
	const router = useRouter();
	return (
		<div
			hidden={hidden}
			onClick={func}
			className="lg:static lg:flex lg:w-full  lg:justify-end lg:h-full xs:relative xs:top-0 xs:w-full xs:h-96 xs:bg-bar ...">
			<ul className="flex lg:flex-row lg:h-full lg:mr-5 lg:self-end lg:w-auto xs:flex-col xs:h-4/5 xs:w-full items-center">
				{links.map((link) => (
					<li
						className="flex lg:h-full lg:w-24 xs:w-full xs:h-1/5 z-40 bg-primary xs:relative ..."
						key={link.id}>
						<NavLink
							link={link.location}
							name={link.name}
							id={link.id}
							disabled={router.pathname === link.location}
							twind={
								router.pathname === link.location
									? active
									: inactive
							}
						/>
					</li>
				))}
			</ul>
			{children}
		</div>
	);
};

export default NavMap;
