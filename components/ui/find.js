import { Btn } from '@/ui/buttons';

const Find = ({ btnName, label, func }) => {
	return (
		<div className="grid grid-rows-2 justify-center h-full bg-find lg:w-1/2  md:w-full  ">
			<div className="flex flex-col self-center ">
				<h1 className="row-span-2 text-4xl text-yellow-100">
					{label}
				</h1>
				<form className="w-full h-full flex border border-black bg-white rounded-md focus-within:ring ring-green-500">
					<label htmlFor={label} />
					<input
						type="text"
						placeholder="zip, city, state"
						className="rounded-md w-full h-full border-none focus:ring-0"
					/>
					<button
						type="submit"
						onClick={func}
						className="bg-success w-1/5 rounded-md m-px active:border">
						{btnName}
					</button>
				</form>
			</div>
			<Btn
				name="View All Store Locations"
				twind="self-end mb-3 border border-white text-black bg-white bg-opacity-10 rounded"
				func={() => alert('hello')}
			/>
		</div>
	);
};

export default Find;
