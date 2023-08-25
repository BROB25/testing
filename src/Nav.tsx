import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BiSolidChevronDown } from "react-icons/bi";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<>
			<div className="relative my-4">
				<Sheet className="fixed top-0">
					<SheetTrigger>
						<button className="p-2">
							<GiHamburgerMenu
								size={28}
								className="fixed top-0 z-10 mt-2 text-white font-bold"
							/>
						</button>
					</SheetTrigger>
					<SheetContent>
						<SheetHeader className="flex items-start text-left">
							<SheetTitle className="text-2xl font-bold">DZ Rentals</SheetTitle>
							<ul
								className="flex flex-col gap-2 cursor-pointer text-xl"
								style={{ lineHeight: "2" }}
							>
								<li className="text-black">Home</li>
								<li className="relative text-black">
									<button
										className="flex items-center"
										onClick={() => setIsOpen(!isOpen)}
									>
										Rentals
										<BiSolidChevronDown />
									</button>
									<ul className={`${isOpen ? "block" : "hidden"} shadow py-2`}>
										<li className="p-2">
											<a href="/rentals/bouncy">Bouncy Houses</a>
										</li>
										<li className="p-2">
											<a href="/rentals/games">Games</a>
										</li>
										<li className="p-2">
											<a href="/rentals/equipment">Equipment</a>
										</li>
									</ul>
								</li>
								<li className="text-black">About</li>
								<li className="text-black">Contact</li>
							</ul>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</>
	);
};

export default Nav;
