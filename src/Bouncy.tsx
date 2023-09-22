import { useState } from "react";
import { Button } from "@/components/ui/button";
import bouncy2 from "./assets/bouncy2.jpg";
import bouncy3 from "./assets/bouncy3.jpg";
import bouncy4 from "./assets/bouncy4.jpg";
import bouncy5 from "./assets/bouncy5.jpg";
import bouncy6 from "./assets/bouncy6.jpg";
import bouncy7 from "./assets/bouncy7.jpg";
import bouncy9 from "./assets/bouncy9.jpg";
import bouncy10 from "./assets/bouncy10.jpg";
import bouncy11 from "./assets/bouncy11.jpg";
import bouncy12 from "./assets/bouncy12.jpg";
import bouncy13 from "./assets/bouncy13.jpg";
import bouncy14 from "./assets/bouncy14.jpg";
import bouncy15 from "./assets/bouncy15.jpg";
import bouncy16 from "./assets/bouncy16.jpg";
import { BiChevronRight } from "react-icons/bi";
import { Link } from "react-scroll";
import Menu from "./Menu";
import Slideshow from "./Slideshow";

const slides = [
	{
		image: bouncy2,
	},
	{
		image: bouncy3,
	},
	{
		image: bouncy4,
	},
	{
		image: bouncy5,
	},
	{
		image: bouncy6,
	},
	{
		image: bouncy7,
	},
	{
		image: bouncy9,
	},
	{
		image: bouncy10,
	},
	{
		image: bouncy11,
	},
	{
		image: bouncy12,
	},
	{
		image: bouncy13,
	},
	{
		image: bouncy14,
	},
	{
		image: bouncy15,
	},
	{
		image: bouncy16,
	},
];

export function ButtonIcon() {
	return (
		<Button variant="outline" size="icon">
			<BiChevronRight className="h-4 w-4" />
		</Button>
	);
}

const Bouncy = () => {
	return (
		<section id="bouncy" className="mt-12">
			<div id="bouncy" className="mx-auto p-2 grid lg:grid-cols-2 gap-4">
				{/* Left Side */}
				<div className="order-2 lg:order-1">
					<Slideshow slides={slides} />
				</div>
				{/* Right Side */}
				<div className="px-4 order-1 lg:order-2">
					<h1 className="text-stone-100 bg-blue-600 text-2xl lg:text-4xl rounded-lg font-bold shadow-lg drop-shadow-lg shadow-slate-700 text-center py-4 slide-right">
						Affordable Inflatable Rentals
					</h1>
					<p className="text-white relative leading-2 lg:leading-loose pt-6 slide-down">
						At DZ Rentals, we understand that choosing the perfect inflatable
						can make or break your event. That's why we offer a wide range of
						affordable inflatable rentals to cater to all your party needs. We
						have you covered with our diverse selection of inflatables. Our
						inventory includes small, mid-sized, and large inflatables, each
						designed to add a thrilling dimension to your festivities. Looking
						to beat the summer heat? Explore our inflatables with water
						attachments that promise hours of refreshing entertainment. And for
						the ultimate adventure, don't miss our slip-n-slide attachment,
						which takes the excitement to a whole new level. Setting up and
						tearing down these inflatables is a breeze, thanks to our
						experienced team's quick and efficient service. We understand that
						your time is precious, and we're dedicated to ensuring a seamless
						experience from start to finish. Our inflatables are not only a
						source of boundless fun but also set the perfect tone for any
						occasion. Whether it's a child's birthday party, a family reunion,
						or a corporate event, DZ Rentals is your trusted partner for
						unforgettable memories!
						<span className="absolute border-b-4 border-blue-600 w-1/4 left-0 -bottom-2"></span>
					</p>
					<div className="flex py-8 slide-right">
						<Menu
							title="pricing"
							statement1="Prices as low as:"
							price1="80"
							statement2="Atachments as low as:"
							price2="20"
						></Menu>
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
