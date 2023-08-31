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
import { GrMail } from "react-icons/gr";

const Nav = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const [rentalsOpen, setRentalsOpen] = useState(false);
	const closeMenu = () => {
		setMenuOpen(false); // close menu
	};
	return (
		<>
			<div className="relative my-4 group">
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
							<SheetHeader className="flex items-center text-center">
								{/* <SheetTitle className="text-2xl font-bold">
									DZ Rentals
								</SheetTitle> */}
								<ul
									className="flex flex-col gap-2 cursor-pointer text-2xl h-full font-bold"
									style={{ lineHeight: "2" }}
								>
									<li className="text-black relative group">
										<Link
											to="home"
											smooth={true}
											duration={500}
											onClick={closeMenu}
										>
											<span>Home</span>
											<span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-600 transition-all group-hover:w-1/2"></span>
										</Link>
									</li>
									<li className="relative text-black relative group">
										<button
											className="flex items-center focus:outline-none"
											onClick={() => setRentalsOpen(!rentalsOpen)}
										>
											Rentals
											<BiSolidChevronDown />
										</button>
										{rentalsOpen && (
											<ul className="py-2">
												<li key="bouncy" className="p-2">
													<a href="/rentals/bouncy">
														<Link
															to="bouncy"
															smooth={true}
															duration={500}
															onClick={closeMenu}
														>
															Inflatables
														</Link>
													</a>
												</li>
												<li key="games" className="p-2">
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
												<li key="equipment" className="p-2">
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
									<li className="text-black relative group">
										<Link
											to="contact"
											smooth={true}
											duration={500}
											onClick={closeMenu}
										>
											<span>Contact</span>
											<span className="absolute -bottom-1 left-0 w-0 h-1 bg-gray-600 transition-all group-hover:w-3/4"></span>
										</Link>
									</li>
								</ul>
								<div className="flex justify-between w-[180px] items-center">
									<a
										href="https://www.instagram.com/djangles_7/"
										target="_blank"
										className=" hover:scale-110 transition ease-in-out duration-300"
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
										className=" hover:scale-110 transition ease-in-out duration-300"
									>
										<img src={fb} className="w-6 h-6 cursor-pointer" alt="" />
									</a>
									<a
										href="tel:6128594412"
										className="hover:scale-110 transition ease-in-out duration-300 "
									>
										<BiSolidPhone size={27} color="black" />
									</a>
									<a
										href="tel:6128594412"
										className="hover:scale-110 transition ease-in-out duration-300"
									>
										<GrMail size={26} className="text-zinc-400" />
									</a>
								</div>
							</SheetHeader>
						</SheetContent>
					)}
				</Sheet>
			</div>
		</>
	);
};

export default Nav;
