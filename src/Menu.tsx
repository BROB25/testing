import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BiSolidChevronDown } from "react-icons/bi";

const Menu = ({ title, statement1, statement2, price1, price2 }) => {
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
					<div className="flex flex-col items-start justify-start">
						{statement1 && (
							<div className="mb-2">
								<p className="text-white font-bold">{statement1}</p>
							</div>
						)}
						{price1 && (
							<div className="mb-2">
								<h3 className="text-green-600 text-lg font-extrabold">
									${price1}
								</h3>
							</div>
						)}
						{statement2 && (
							<div className="mb-2">
								<p className="text-white font-bold">{statement2}</p>
							</div>
						)}
						{price2 && (
							<div className="mb-2">
								<h3 className="text-green-600 text-lg font-extrabold">
									${price2}
								</h3>
							</div>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default Menu;
