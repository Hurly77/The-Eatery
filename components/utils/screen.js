import { useEffect, useState } from 'react';

const ScreenSize = () => {
	const [width, setWidth] = useState(
		typeof window !== 'undefined' ? window.innerWidth : 0,
	);

	const getWidth = () => {
		useEffect(() => {
			if (window !== 'undefined') {
				setWidth(window.innerWidth);
			}
		}, []);

		return width;
	};
};

export default ScreenSize;
