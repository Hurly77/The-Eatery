import Image from 'next/image';

const MenuPage = () => {
	return (
		<div className="w-full flex justify-center bg-black bg-opacity-95 pb-3 pt-3 ">
			<Image
				width={910.75}
				height={1500}
				alt="Eatery Menu"
				src="/images/menu.png"
				className="lg:w-1/2"
			/>
		</div>
	);
};

export default MenuPage;
