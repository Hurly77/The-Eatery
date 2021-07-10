import { Map, Find } from '@/ui/index';

const Locations = ({ api }) => {
	const locations = [{ address: '22 B baker st.' }];

	const handleClick = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<div
				style={{ height: '80vh' }}
				className="flex w-full xs:flex-col-reverse lg:flex-row">
				<Find
					label="Locations Near You"
					btnName="Find"
					func={(e) => handleClick(e)}
				/>
				<Map gKey={api} />
			</div>
			<div>
				{locations.map((location, idx) => {
					return (
						<div key={idx}>
							<h1>{location.address}</h1>
						</div>
					);
				})}
			</div>
		</>
	);
};

export const getStaticProps = async () => {
	const gKey = process.env.GOOGLE_API_KEY;

	return {
		props: { api: gKey },
	};
};

export default Locations;
