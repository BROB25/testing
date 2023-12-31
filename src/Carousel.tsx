import { useState } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";
import bouncy8 from "./assets/bouncy8.jpg";
import { Button } from "@/components/ui/button";
import games1 from "./assets/games1.jpg";
import misc1 from "./assets/misc1.jpg";

const InfoButton = () => (
	<Button className="cursor-pointer uppercase text-xs px-4 bg-gray-400 border border-black border-2 font-extrabold">
		View Rentals
	</Button>
);

export default function Carousel() {
	const [curr, setCurr] = useState(0);

	const next = () => {
		setCurr((curr) => (curr + 1) % slideItems.length);
	};

	const prev = () => {
		setCurr((curr) => (curr + slideItems.length - 1) % slideItems.length);
	};

	const slideItems = [
		<div className="bg-blue-600 h-[400px] md:h-[450px] w-screen flex-shrink-0 border-2 border-gray-800 ">
			<div className="grid grid-cols-1 items-center">
				<div className="flex justify-center py-4">
					<h2 className="text-lg sm:text-xl whitespace-nowrap font-extrabold text-black p-4 shadow-lg shadow-gray-900 rounded-full text-center w-[300px] ">
						Inflatable Rentals
					</h2>
				</div>
				<div className="flex justify-center py-4">
					<img
						src={bouncy8}
						alt="Bouncy Rental"
						className="rounded-full border border-4 border-black h-full w-[250px] md:w-[310px] shadow-lg shadow-gray-900"
					/>
				</div>
			</div>
		</div>,

		<div className="bg-red-600 h-[400px] md:h-[450px] w-screen flex-shrink-0 border-2 border-gray-800">
			<div className="grid grid-cols-1 items-center">
				<div className="flex justify-center py-4">
					<h2 className="text-lg sm:text-xl whitespace-nowrap font-extrabold text-black p-4 shadow-lg shadow-gray-900 rounded-full text-center w-[300px] ">
						Game Rentals
					</h2>
				</div>
				<div className="flex justify-center py-4">
					<img
						src={games1}
						alt="Bouncy Rental"
						className="rounded-full border border-4 border-black h-full w-[250px] md:w-[310px] shadow-lg shadow-gray-900"
					/>
				</div>
			</div>
		</div>,

		<div className="bg-yellow-500 h-[400px] md:h-[450px] w-screen flex-shrink-0 border-2 border-gray-800">
			<div className="grid grid-cols-1 items-center">
				<div className="flex justify-center py-4">
					<h2 className="text-lg sm:text-xl whitespace-nowrap font-extrabold text-black p-4 shadow-lg shadow-gray-900 rounded-full text-center w-[300px] ">
						Equipment Rentals
					</h2>
				</div>
				<div className="flex justify-center py-4">
					<img
						src={misc1}
						alt="Bouncy Rental"
						className="rounded-full border border-4 border-black h-full w-[250px] md:w-[310px] shadow-lg shadow-gray-900"
					/>
				</div>
			</div>
		</div>,
	];

	return (
		<div className="relative overflow-hidden">
			<div
				className="flex flex-nowrap transition-transform ease-out duration-500"
				style={{ transform: `translateX(-${curr * 100}vw)` }}
			>
				{slideItems}
			</div>

			<div className="absolute inset-0 flex items-center justify-between p-4">
				<button onClick={prev}>
					<BiLeftArrow size={30} />
				</button>

				<button onClick={next}>
					<BiRightArrow size={30} />
				</button>
			</div>
			<div className="absolute inset-0 flex justify-center items-center top-80 md:top-96">
				{/* <InfoButton className="" /> */}
			</div>
		</div>
	);
}
