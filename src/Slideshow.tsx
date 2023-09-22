import React, { useState, useEffect } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

const Slideshow = ({ slides }) => {
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

	useEffect(() => {
		// Preload the next and previous images for smoother transitions
		const preloadImages = (index) => {
			const nextIndex = (index + 1) % slides.length;
			const prevIndex = index === 0 ? slides.length - 1 : index - 1;

			const preloadImg = (imgIndex) => {
				const img = new Image();
				img.src = slides[imgIndex].image;
			};

			preloadImg(nextIndex);
			preloadImg(prevIndex);
		};

		preloadImages(currentIndex);
	}, [currentIndex, slides]);

	return (
		<div className="w-full h-[280px] md:h-[500px] bg-center bg-cover duration-500 overflow-hidden relative">
			{slides.map((slide, index) => (
				<img
					key={index}
					src={index === currentIndex ? slide.image : ""}
					loading="lazy"
					className={`object-cover rounded-xl w-full h-full absolute transition-opacity duration-500 ${
						index === currentIndex ? "opacity-100" : "opacity-0"
					}`}
				/>
			))}
			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white font-extrabold cursor-pointer">
				<BiLeftArrow onClick={prevSlide} size={25} />
			</div>
			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white font-extrabold cursor-pointer">
				<BiRightArrow onClick={nextSlide} size={25} />
			</div>
		</div>
	);
};

export default Slideshow;

// import React, { useState } from "react";
// import { BiRightArrow, BiLeftArrow } from "react-icons/bi";

// const Slideshow = ({ slides }) => {
// 	const [currentIndex, setCurrentIndex] = useState(0);
// 	const prevSlide = () => {
// 		const isFirstSlide = currentIndex === 0;
// 		const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
// 		setCurrentIndex(newIndex);
// 	};

// 	const nextSlide = () => {
// 		const isLastSlide = currentIndex === slides.length - 1;
// 		const newIndex = isLastSlide ? 0 : currentIndex + 1;
// 		setCurrentIndex(newIndex);
// 	};

// 	return (
// 		<div className="w-full h-[280px] md:h-[500px] bg-center bg-cover duration-500 overflow-hidden relative">
// 			{slides.map((slide, index) => (
// 				<img
// 					key={index}
// 					src={slide.image}
// 					className={`object-cover rounded-xl w-full h-full absolute transition-opacity duration-500 ${
// 						index === currentIndex ? "opacity-100" : "opacity-0"
// 					}`}
// 				/>
// 			))}
// 			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-1 text-2xl rounded-full p-2 bg-black/20 text-white font-extrabold cursor-pointer">
// 				<BiLeftArrow onClick={prevSlide} size={25} />
// 			</div>
// 			<div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-1 text-2xl rounded-full p-2 bg-black/20 text-white font-extrabold cursor-pointer">
// 				<BiRightArrow onClick={nextSlide} size={25} />
// 			</div>
// 		</div>
// 	);
// };

// export default Slideshow;
