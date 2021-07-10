import Linkify from './linkify';
const Socials = ({
	hidden,
	icons,
	iconStyles,
	flex,
	...args
}) => {
	const obj = args;
	return (
		<div className={`${flex}`}>
			{icons.map((icon, idx) => {
				return (
					<Linkify key={idx} args={args} location={icon[1]}>
						<i
							aria-hidden
							key={idx}
							className={`fab fa-${icon[0]} ${iconStyles}`}></i>
					</Linkify>
				);
			})}
		</div>
	);
};

export default Socials;
