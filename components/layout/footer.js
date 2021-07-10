import Socials from '@/ui/socials';
import media from '@/data/media';

const Footer = () => {
	return (
		<footer className="w-full bg-light text-white relative ...">
			<div className="2xl:px-52 xl:px:32 lg:px-20 xs:px-3 space-y-10">
				<header className="flex items-center w-full w-full border-b">
					<Socials
						flex={'flex self-center p-1 lg:justify-around'}
						iconStyles={
							'flex justify-center items-center h-3/4 w-full hover:text-success'
						}
						bg="flex text-xl justify-center items-center xs:w-9"
						icons={media}
					/>
				</header>
				<div className="">
					<h1 className="flex flex-row-reverse justify-end items-end text-6xl">
						The{<br />} Eatery
						<img
							src="images/eat-2.png"
							className="w-40"
							alt="Big Burger"
						/>
					</h1>
				</div>
				<div className="flex flex-col space-y-5 mt-5 text-xl">
					<p>
						This Website was built and Designed by{' '}
						<em className="tracking-tighter text-2xl mr-1">
							Enzwel.
						</em>{' '}
						<br />
						If you would like to contact follow the link
						below to our main website.
					</p>
					<ul className="xl:px-10 xs:px-5">
						<li>
							<p className="text-2xl tracking-tight">
								Check Us Out{' '}
							</p>
							<a
								href="https://enzwel.com"
								className="underline text-green-600 hover:text-green-200">
								Enzwel.com
							</a>
						</li>
					</ul>
				</div>
				<div className="flex justify-center border-t">
					©2020-2021 Enzwel and Contributors.
				</div>
			</div>
		</footer>
	);
};

export default Footer;
