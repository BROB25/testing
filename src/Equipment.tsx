import React, { useState } from "react";
import equip1 from "./assets/equip1.jpg";
import equip2 from "./assets/equip2.jpg";
import equip4 from "./assets/equip4.jpg";
import equip5 from "./assets/equip5.jpg";
import { BiRightArrow, BiLeftArrow, BiSolidChevronDown } from "react-icons/bi";
import { Button } from "@/components/ui/button";
import Menu from "./Menu";
import { Link } from "react-scroll";

const slides = [
	{
		image: equip4,
	},
	{
		image: equip1,
	},
	{
		image: equip2,
	},
	{
		image: equip5,
	},
];

const Equipment = () => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const prevSlide = () => {
		const isFirstSlide = currentIndex === 0;
		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
		setCurrentIndex(newIndex);
	};

	const nextSlide = () => {
		const isLastSlide = currentIndex === slides.length - 1;
		const newIndex = isLastSlide ? 0 : currentIndex + 1;
		setCurrentIndex(newIndex);
	};

	return (
		<section
			id="equipment"
			className="h-screen w-full py-8 lg:pt-8 lg:pb-0 pb-96 mb-72 lg:mb-0"
		>
			<div className="h-[full] mx-auto px-2 md:px-4 py-4 grid lg:grid-cols-6 gap-8">
				{/* Image Carousel */}
				<div className="col-span-6 md:col-span-3 h-[full] relative order-2 md:order-1">
					<div className="w-full h-[280px] md:h-[500px] bg-center bg-cover duration-500 overflow-hidden">
						{slides.map((slide, index) => (
							<img
								key={index}
								src={slide.image}
								className={`object-cover rounded-xl w-full h-full absolute transition-opacity duration-500 ${
									index === currentIndex ? "opacity-100" : "opacity-0"
								}`}
							/>
						))}
					</div>
					<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white font-extrabold cursor-pointer">
						<BiLeftArrow onClick={prevSlide} size={25} />
					</div>
					<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white font-extrabold cursor-pointer">
						<BiRightArrow onClick={nextSlide} size={25} />
					</div>
				</div>

				{/* Written Content */}
				<div className="col-span-6 md:col-span-3 order-1 md:order-2 px-4">
					<h1 className="text-stone-100 rounded-lg bg-yellow-500 text-2xl lg:text-4xl font-bold shadow-lg drop-shadow-lg text-center shadow-slate-700 mt-6 md:mt-0 py-4 slide-right">
						Equipment Rentals
					</h1>
					<p className="text-white relative leading-2 lg:leading-loose pt-6">
						When it comes to equipment rentals, DZ Rentals has you covered with
						a wide array of reliable and versatile options. Our selection of
						chairs and tables is designed to complement any event seamlessly.
						Our comfortable chairs come in various styles and colors, ensuring
						the perfect match for your aesthetic preferences. And with an
						abundant supply, you'll never have to worry about accommodating your
						guests. Our lightweight tables offer ample space without
						compromising on mobility, making them ideal for any gathering, from
						intimate dinners to large-scale celebrations. Need a pristine
						setting? Don't forget to check out our power wash rental to ensure a
						spotless presentation. Beyond chairs and tables, we also offer a
						range of miscellaneous items to meet your event needs. At DZ
						Rentals, our commitment to excellence shines through in every piece
						of equipment we provide, guaranteeing your event's success, one
						rental at a time.
						<span className="absolute border-b-4 border-yellow-500 w-1/4 left-0 -bottom-2"></span>
					</p>
					<div className="flex py-8 slide-right">
						<Menu title="pricing" attachment="Prices as low as:" />
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

export default Equipment;
