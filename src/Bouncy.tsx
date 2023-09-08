import { useState } from "react";
import { Button } from "@/components/ui/button";
import bouncy2 from "./assets/bouncy2.jpg";
import bouncy3 from "./assets/bouncy3.jpg";
import bouncy4 from "./assets/bouncy4.jpg";
import bouncy5 from "./assets/bouncy5.jpg";
import bouncy6 from "./assets/bouncy6.jpg";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-scroll";
import Menu from "./Menu";

export function ButtonIcon() {
	return (
		<Button variant="outline" size="icon">
			<BiChevronRight className="h-4 w-4" />
		</Button>
	);
}

const Bouncy = () => {
	return (
		<section id="bouncy">
			<div id="bouncy" className="mx-auto p-2 grid lg:grid-cols-2 gap-4">
				{/* Left Side */}
				<div className="grid grid-cols-2 grid-rows-6 h-[80vh] order-2 lg:order-1">
					<img
						className="row-span-3 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={bouncy2}
						alt=""
					/>
					<img
						className="row-span-2 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={bouncy3}
						alt=""
					/>
					<img
						className="row-span-2 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={bouncy4}
						alt=""
					/>
					<img
						className="row-span-3 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={bouncy5}
						alt=""
					/>
					<img
						className="row-span-2 object-cover w-full h-full p-2 hover:scale-110 transition ease-in-out duration-300"
						src={bouncy6}
						alt=""
					/>
				</div>
				{/* Right Side */}
				<div className="px-4 order-1 lg:order-2">
					<h3 className="text-stone-100 bg-blue-600 text-2xl lg:text-4xl rounded-lg font-bold shadow-lg drop-shadow-lg shadow-slate-700 text-center py-4">
						Affordable Inflatable Rentals
					</h3>
					<p className="text-white relative leading-2 lg:leading-loose pt-6">
						At DZ Rentals, we understand that choosing the perfect inflatable
						can make or break your event. That's why we offer a wide range of
						affordable inflatable rentals to cater to all your party needs. We
						have you covered with our diverse selection of inflatables. Our
						inventory includes small, mid-sized, and large inflatables, each
						designed to add a thrilling dimension to your festivities. Looking
						to beat the summer heat? Explore our inflatables with water
						attachments that promise hours of refreshing entertainment. And for
						the ultimate adventure, don't miss our slip-n-slide attachment,
						which takes the excitement to a whole new level.
					</p>
					<p className="text-white relative leading-2 lg:leading-loose pt-6">
						Setting up and tearing down these inflatables is a breeze, thanks to
						our experienced team's quick and efficient service. We understand
						that your time is precious, and we're dedicated to ensuring a
						seamless experience from start to finish. Our inflatables are not
						only a source of boundless fun but also set the perfect tone for any
						occasion. Whether it's a child's birthday party, a family reunion,
						or a corporate event, DZ Rentals is your trusted partner for
						unforgettable memories!
						<span className="absolute border-b-4 border-blue-600 w-1/4 left-0 -bottom-2"></span>
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

export default Bouncy;
