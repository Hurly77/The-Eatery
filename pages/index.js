import Head from 'next/head';
import ImageSlider from '@/components/Img-slide/image-slider';

export default function Home() {
	return (
		<div className="flex flex-col w-screen h-auto">
			<Head>
				<title>The Eatery</title>
				<meta
					name="description"
					content="Welcome to The Eatery"
				/>
			</Head>
			<div className="space-y-20 bg-white">
				<ImageSlider />
			</div>
		</div>
	);
}
