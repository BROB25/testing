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
			className="h-screen w-full py-8 lg:pt-8 lg:pb-0 pb-96 mb-24 lg:mb-0"
		>
			<div className="h-[full] mx-auto px-2 md:px-4 py-4 grid lg:grid-cols-6 gap-8">
				{/* Image Carousel */}
				<div className="col-span-6 md:col-span-3 h-[full] relative order-2 md:order-1">
					<div className="w-full h-[280px] md:h-[500px] rounded-2xl bg-center bg-cover duration-500 overflow-hidden">
						{slides.map((slide, index) => (
							<img
								key={index}
								src={slide.image}
								className={`object-cover w-full h-full absolute transition-opacity duration-500 ${
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
					<h3 className="text-stone-100 bg-yellow-500 text-2xl lg:text-4xl font-bold shadow-lg drop-shadow-lg text-center shadow-slate-700 mt-6 md:mt-0 py-4">
						Equipment Rentals
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
						<span className="absolute border-b-4 border-yellow-500 w-1/4 left-0 -bottom-2"></span>
					</p>
					<div className="flex py-8">
						<Menu />
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
