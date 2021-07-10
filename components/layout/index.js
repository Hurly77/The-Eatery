import Navbar from './navbar';
import Footer from './footer';
import Head from 'next/head';

const Layout = ({ children }) => {
	const content = '';
	return (
		<>
			<Head>
				<meta name="description" content={content} />
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1.0"
				/>
			</Head>
			<meta
				name="authors"
				content="Cameron Leverett and Tyler Jones"
			/>
			<div>
				<Navbar />
				<div
					style={{
						// minHeight: '50vh',
						height: 'max-content',
					}}
					className="">
					{children}
				</div>
				<Footer />
			</div>
		</>
	);
};

export default Layout;
