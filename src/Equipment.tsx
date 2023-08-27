import React, { useState } from "react";
import equip1 from "./assets/equip1.jpg";
import equip2 from "./assets/equip2.jpg";
import equip4 from "./assets/equip4.jpg";
import equip5 from "./assets/equip5.jpg";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

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
		<section id="equipment" className="h-[600px] w-full py-8">
			<div className="h-[full] bg-neutral-900 mx-auto px-2 md:px-4 py-4 grid lg:grid-cols-7 gap-8">
				{/* Written Content */}
				<div className="col-span-7 md:col-span-3">
					<h3 className="text-stone-100 text-2xl lg:text-4xl font-bold shadow-lg drop-shadow-lg text-center shadow-slate-800 mt-6 md:mt-0 py-4">
						Equipment Rentals
					</h3>
					<p className="pt-4 text-white leading-6 text-start">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non
						eum a error unde pariatur vitae illo inventore eligendi doloribus
						officia obcaecati laborum in alias repellat natus voluptatum soluta,
						sed corrupti recusandae iste ut neque aliquid saepe. Accusantium est
						ab alias. Minima dolorum, temporibus magnam optio quaerat commodi
						eveniet consequatur.
					</p>
				</div>

				{/* Image Carousel */}
				<div className="col-span-7 md:col-span-4 h-[full] px-0 md:px-4 relative">
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
					<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white font-extrabold cursor-pointer">
						<BiLeftArrow onClick={prevSlide} size={25} />
					</div>
					<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white font-extrabold cursor-pointer">
						<BiRightArrow onClick={nextSlide} size={25} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Equipment;
