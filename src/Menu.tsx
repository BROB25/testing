import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BiSolidChevronDown } from "react-icons/bi";

const Menu = ({ title, price, attachment }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative">
			<Button
				onClick={toggleMenu}
				variant="outline"
				className="btn cursor-pointer uppercase text-xs px-4 bg-gray-400 border text-white border-black border-2 font-extrabold"
			>
				{title} <BiSolidChevronDown size={23} className="pl-2" />
			</Button>
			{isOpen && (
				<div className="menu absolute top-full mt-2 w-[300px] h-[200px] p-4 bg-black border border-4 border-gray-400 rounded-xl shadow-lg z-30">
					{price && (
						<div className="flex flex-col items-start justify-start">
							<div className="mb-2">
								<p className="text-white font-bold">Prices as low as:</p>
								<h3 className="text-green-600 text-lg font-extrabold">
									${price}
								</h3>
							</div>
							<div>
								<p className="text-white font-bold">{attachment} &nbsp; </p>
								<h3 className="text-green-600 text-lg font-extrabold"> $20</h3>
							</div>
						</div>
					)}
					{!price && (
						<div className="flex flex-col items-start justify-start">
							<div className="mb-2">
								<p className="text-white font-bold">{attachment} &nbsp; </p>
								<h3 className="text-green-600 text-lg font-extrabold"> $20</h3>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default Menu;
