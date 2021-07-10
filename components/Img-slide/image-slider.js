import Image from 'next/image';
import { slides } from './slides';
import { useState } from 'react';

const ImageSlider = () => {
	const [current, setCurrent] = useState(0);
	const length = slides.length;

	const fadeOut = {
		visibility: 'hidden',
		opacity: 0,
		transition: 'visibility 0s linear 300ms, opacity 300ms',
	};
	const fadeIn = {
		visibility: 'visible',
		opacity: 1,
		transition: 'visibility 0s linear 0s, opacity 300ms',
	};

	const nextSlide = () => {
		setCurrent(current === length - 1 ? 0 : current + 1);
	};

	const prevSlide = () => {
		setCurrent(current === 0 ? length - 1 : current - 1);
	};

	if (!Array.isArray(slides) || slides.length === 0) {
		return null;
	}

	return (
		<div className="relative flex justify-center bg-back w-full pt-10 pb-10">
			<span
				className="material-icons text-6xl bg-opacity-60 bg-white rounded-full cursor-pointer absolute lg:top-1/2 xs:top-3/4 right-3 z-10  ..."
				onClick={nextSlide}>
				arrow_forward
			</span>
			<span
				className="material-icons text-6xl bg-opacity-60 bg-white rounded-full cursor-pointer absolute lg:top-1/2 xs:top-3/4 left-3 z-10  ..."
				onClick={prevSlide}>
				arrow_back
			</span>
			{slides.map((slide, idx) => {
				return (
					<div
						key={idx}
						className="flex justify-center"
						style={idx === current ? fadeIn : fadeOut}>
						<img
							src={slide}
							alt="hello"
							className={
								idx === current ? 'w-full' : 'hidden'
							}
						/>
					</div>
				);
			})}
		</div>
	);
};

export default ImageSlider;
