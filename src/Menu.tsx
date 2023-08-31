import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { BiSolidChevronDown } from "react-icons/bi";

const Menu = () => {
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
				Pricing <BiSolidChevronDown size={23} className="pl-2" />
			</Button>
			{isOpen && (
				<div className="menu absolute top-full mt-2 w-[300px] h-[200px] p-4 bg-black border border-4 border-gray-400 rounded-xl shadow-lg z-30">
					{/* Add your menu content here */}
					Menu Content
				</div>
			)}
		</div>
	);
};

export default Menu;
