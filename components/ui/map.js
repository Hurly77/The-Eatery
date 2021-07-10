import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

const Map = () => {
	const gmap = useRef(null);

	const twind = {
		div: 'h-full xs:w-full  lg:w-1/2 lg:justify-self-end',
	};
	useEffect(() => {
		const loader = new Loader({
			apiKey: 'AIzaSyD-Mk7KnSU6unxi_PlKRoC6x9vHq1fV0y8',
			version: 'weekly',
		});

		let map;
		loader.load().then(() => {
			const google = window.google;
			map = new google.maps.Map(gmap.current, {
				center: { lat: 34.053691, lng: -118.242766 },
				zoom: 10,
			});
		});
	}, []);

	return (
		<div
			id="map"
			style={{ height: '100%' }}
			ref={gmap}
			className={twind.div}></div>
	);
};

export default Map;
