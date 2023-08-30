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
import { Link } from "react-scroll";

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [rentalsOpen, setRentalsOpen] = useState(false);
	const closeMenu = () => {
		setMenuOpen(false); // close menu
	};
	return (
		<>
			<div className="relative my-4">
				<Sheet className="fixed top-0">
					<SheetTrigger>
						<button className="p-2" onClick={() => setMenuOpen(true)}>
							<GiHamburgerMenu
								size={28}
								className="fixed top-0 z-10 mt-2 text-white font-bold"
							/>
						</button>
					</SheetTrigger>
					{menuOpen && (
						<SheetContent>
							<SheetHeader className="flex items-start text-left">
								<SheetTitle className="text-2xl font-bold">
									DZ Rentals
								</SheetTitle>
								<ul
									className="flex flex-col gap-2 cursor-pointer text-xl"
									style={{ lineHeight: "2" }}
								>
									<li className="text-black">
										<Link
											to="home"
											smooth={true}
											duration={500}
											onClick={closeMenu}
										>
											Home
										</Link>
									</li>
									<li className="relative text-black">
										<button
											className="flex items-center focus:outline-none"
											onClick={() => setRentalsOpen(!rentalsOpen)}
										>
											Rentals
											<BiSolidChevronDown />
										</button>
										{rentalsOpen && (
											<ul className={`${isOpen ? "block" : "hidden"}  py-2`}>
												<li className="p-2">
													<a href="/rentals/bouncy">
														<Link
															to="bouncy"
															smooth={true}
															duration={500}
															onClick={closeMenu}
														>
															Bouncy Houses
														</Link>
													</a>
												</li>
												<li className="p-2">
													<a href="/rentals/games">
														<Link
															to="games"
															smooth={true}
															duration={500}
															onClick={closeMenu}
														>
															Games
														</Link>
													</a>
												</li>
												<li className="p-2">
													<a href="/rentals/equipment">
														<Link
															to="equipment"
															smooth={true}
															duration={500}
															onClick={closeMenu}
														>
															Equipment
														</Link>
													</a>
												</li>
											</ul>
										)}
									</li>
									{/* <li className="text-black">About</li> */}
									<li className="text-black">
										<Link
											to="contact"
											smooth={true}
											duration={500}
											onClick={closeMenu}
										>
											Contact
										</Link>
									</li>
									<div className="flex justify-start items-center ">
										<a
											href="https://www.instagram.com/djangles_7/"
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
											href="https://www.facebook.com/profile.php?id=100047963445698"
											target="_blank"
											className="mr-2 hover:scale-110 transition ease-in-out duration-300"
										>
											<img src={fb} className="w-6 h-6 cursor-pointer" alt="" />
										</a>
										<a
											href="tel:6128594412"
											className="hover:scale-110 transition ease-in-out duration-300"
										>
											<BiSolidPhone size={26} />
										</a>
									</div>
								</ul>
							</SheetHeader>
						</SheetContent>
					)}
				</Sheet>
			</div>
		</>
	);
};

export default Nav;
