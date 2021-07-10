import Image from 'next/image';
const CompanyPage = () => {
	return (
		<div className="flex justify-center bg-black bg-opacity-95 pb-3 pt-3">
			<Image
				width={869}
				height={1975}
				alt="Eatery Time-Line"
				src="/images/time-line.png"
			/>
		</div>
	);
};

export default CompanyPage;
