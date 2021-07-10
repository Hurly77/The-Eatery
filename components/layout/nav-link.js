import Link from 'next/link';

const NavLink = ({ link, name, twind }) => {
	return (
		<Link href={link}>
			<a aria-hidden className={twind}>
				{name}
			</a>
		</Link>
	);
};

export default NavLink;
