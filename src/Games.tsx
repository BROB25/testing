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
import Slideshow from "./Slideshow";

const slides = [
	{
		image: game2,
	},
	{
		image: game3,
	},
	{
		image: game4,
	},
	{
		image: game6,
	},
	{
		image: game7,
	},
	{
		image: game8,
	},
];

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
				<div className="order-2">
					<Slideshow slides={slides} />
				</div>
				{/* Right Side */}
				<div className="px-4 lg:px-6 order-1">
					<h1 className="text-stone-100 rounded-lg bg-red-600 text-2xl lg:text-4xl font-bold shadow-lg drop-shadow-lg shadow-slate-700 text-center py-4 slide-left">
						Game Rentals
					</h1>
					<p className="text-white relative leading-2 lg:leading-loose pt-6">
						We're not just about inflatables; we're also your ultimate source
						for game rentals that will take your event to the next level! We
						offer a vast selection of games, including classics like Ladder Ball
						and Cornhole, as well as larger-than-life options like Giant Connect
						4 and more. These games are in impeccable condition, meticulously
						maintained, and ready to deliver hours of entertainment. Whether
						you're planning a cozy gathering with friends or a grand event with
						a large crowd, our game rentals are designed to cater to all group
						sizes. They add an exciting, interactive element to any occasion,
						fostering laughter and friendly competition among your guests. At DZ
						Rentals, we believe that games are more than just pastimes; they're
						memory-makers. So, choose from our wide array of options, and let
						the fun begin! Our professionally maintained game rentals are the
						perfect addition to your event, ensuring a fantastic experience for
						everyone involved.
						<span className="absolute border-b-4 border-red-600 w-1/4 left-0 -bottom-2"></span>
					</p>
					<div className="flex py-8 slide-left">
						<Menu
							title="Pricing"
							statement1="Prices as low as"
							price1="15"
						></Menu>
						<div>
							<Link to="contact" smooth={true} duration={500}>
								<Button className="cursor-pointer uppercase text-xs px-4 ml-2 bg-gray-400 border border-black border-2 font-extrabold">
									Request a Quote
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
