import React from "react";
import equip1 from "./assets/equip1.jpg";
import equip2 from "./assets/equip2.jpg";
import equip3 from "./assets/equip3.jpg";
import equip4 from "./assets/equip4.jpg";
import equip5 from "./assets/equip5.jpg";

const Equipment = () => {
	return (
		<section
			id="equipment"
			className="pt-80 md:pt-0 pb-8 md:pb-44 md:mb-0 mb-60"
		>
			<div className="h-[500px] bg-neutral-900 mx-auto lg:my-20 lg:pt-16 px-4 grid lg:grid-cols-6 gap-8">
				<div className="lg:top-20 relative col-span-3 md:col-span-2">
					<h3 className="text-stone-100 text-2xl lg:text-4xl font-bold shadow-lg drop-shadow-lg text-center shadow-slate-800 mt-6 md:mt-0">
						Equipment Rentals
					</h3>
					<p className="pt-4 text-white leading-6 text-mute text-center md:text-start">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla non
						eum a error unde pariatur vitae illo inventore eligendi doloribus
						officia obcaecati laborum in alias repellat natus voluptatum soluta,
						sed corrupti recusandae iste ut neque aliquid saepe. Accusantium est
						ab alias. Minima dolorum, temporibus magnam optio quaerat commodi
						eveniet consequatur.
					</p>
				</div>
				<div className=" h-[80vh] grid col-span-3 col-rows-2 grid-cols-2 gap-4">
					<img
						className="object-cover w-full h-full hover:scale-110 transition ease-in-out duration-300"
						src={equip4}
						alt=""
					/>
					<img
						className="object-cover w-full h-full hover:scale-110 transition ease-in-out duration-300"
						src={equip1}
						alt=""
					/>
					<img
						className="object-cover w-full h-full  hover:scale-110 transition ease-in-out duration-300"
						src={equip2}
						alt=""
					/>

					<img
						className="object-cover w-full h-full hover:scale-110 transition ease-in-out duration-300"
						src={equip5}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Equipment;
