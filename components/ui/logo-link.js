import Image from 'next/image';
import Link from 'next/link';

const LogoLink = ({ hidden }) => {
	return (
		<Link href="/">
			<a
				hidden={hidden}
				className="flex lg:flex-1 h-full p-3 self-center">
				<Image
					src="/images/eat-2.png"
					alt="Eatery-Logo"
					layout={'fixed'}
					width={75}
					height={75}
				/>
			</a>
		</Link>
	);
};

export default LogoLink;
