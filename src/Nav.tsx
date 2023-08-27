import { useState } from "react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSolidChevronDown, BiSolidPhone } from "react-icons/bi";
import insta from "./assets/insta.svg";
import fb from "./assets/fb.jpeg";

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
											<a href="/rentals/equipment">Equipment lol</a>
										</li>
									</ul>
								</li>
								<li className="text-black">About</li>
								<li className="text-black">Contact</li>
								<div className="flex justify-start items-center ">
									<a
										href="https://www.instagram.com/off.brand.drake/"
										target="_blank"
										className="mr-2 hover:scale-110 transition ease-in-out duration-300"
									>
										<img
											src={insta}
											className="w-8 h-8 cursor-pointer"
											alt=""
										/>
									</a>
									<a
										href="https://www.instagram.com/off.brand.drake/"
										target="_blank"
										className="mr-2 hover:scale-110 transition ease-in-out duration-300"
									>
										<img src={fb} className="w-6 h-6 cursor-pointer" alt="" />
									</a>
									<a
										href="https://www.instagram.com/off.brand.drake/"
										target="_blank"
										className="hover:scale-110 transition ease-in-out duration-300"
									>
										<BiSolidPhone size={26} />
									</a>
								</div>
							</ul>
						</SheetHeader>
					</SheetContent>
				</Sheet>
			</div>
		</>
	);
};

export default Nav;
