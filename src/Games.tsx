import { Button } from "@/components/ui/button";
import game2 from "./assets/game2.jpg";
import game3 from "./assets/game3.jpg";
import game4 from "./assets/game4.jpg";
import game6 from "./assets/game6.jpg";
import game7 from "./assets/game7.jpg";
import game8 from "./assets/game8.jpg";
import { BiSolidChevronDown, BiChevronRight } from "react-icons/bi";
import Menu from "./Menu";
import { Link } from "react-scroll";

export function ButtonIcon() {
	return (
		<Button variant="outline" size="icon">
			<BiChevronRight className="h-4 w-4" />
		</Button>
	);
}

const Games = () => {
	return (
		<section id="games" className="">
			<div id="games" className="p-2 grid lg:grid-cols-2 gap-4 md:pb-0 pb-4">
				{/* Left Side */}
				<div className="grid grid-cols-2 md:grid-cols-3 h-[80vh] order-2 sm:mb-0 lg:mb-0">
					<img
						className="row-span-3 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={game2}
						alt=""
					/>
					<img
						className="row-span-2 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={game3}
						alt=""
					/>
					<img
						className="row-span-3 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={game4}
						alt=""
					/>
					<img
						className="row-span-3 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={game8}
						alt=""
					/>
					<img
						className="row-span-3 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={game6}
						alt=""
					/>
					<img
						className="row-span-3 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={game7}
						alt=""
					/>
				</div>
				{/* Right Side */}
				<div className="px-4 lg:px-6 order-1">
					<h3 className="text-stone-100 bg-red-600 text-2xl lg:text-4xl font-bold shadow-lg drop-shadow-lg shadow-slate-700 text-center py-4">
						Game Rentals
					</h3>
					<p className="text-white relative leading-2 lg:leading-loose pt-6">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
						blanditiis nam eveniet consequuntur maxime ad deserunt illo a
						explicabo, assumenda praesentium placeat enim voluptates possimus
						voluptatem, commodi sed, excepturi doloremque necessitatibus fuga
						eos sunt. Quae doloribus facere beatae ut odit tenetur, a quia,
						maxime nisi, quasi iure at inventore ad tempore aperiam explicabo
						voluptatum voluptatibus enim ab facilis pariatur suscipit eos
						dolorum. Omnis laudantium labore ab nesciunt voluptates vero error
						quia pariatur totam accusamus, deserunt dolore impedit voluptatibus
						eius vel?
						<span className="absolute border-b-4 border-red-600 w-1/4 left-0 -bottom-2"></span>
					</p>
					<div className="flex py-8">
						<Menu></Menu>
						<div>
							<Link to="contact" smooth={true} duration={500}>
								<Button className="cursor-pointer uppercase text-xs px-4 ml-2 bg-gray-400 border border-black border-2 font-extrabold">
									Book a rental
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Games;
