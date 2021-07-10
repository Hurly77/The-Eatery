const Linkify = ({ location, children, args }) => {
	const twind = Object.values(args).join(' ');
	return (
		<a aria-hidden href={location} className={twind}>
			{children}
		</a>
	);
};

export default Linkify;
