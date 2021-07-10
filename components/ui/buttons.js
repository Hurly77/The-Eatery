export const Btn = ({
	func,
	name,
	twind = 'bg-success w-1/3 h-15 rounded content-end',
}) => {
	return (
		<button className={twind} onClick={func}>
			{name}
		</button>
	);
};

export const MenuBtn = ({ func, name, twind }) => {
	const btnStyles = {
		fontSize: '40px',
	};

	return (
		<button className={twind} onClick={func}>
			<span style={btnStyles} className="material-icons">
				{name}
			</span>
		</button>
	);
};

export default Btn;
