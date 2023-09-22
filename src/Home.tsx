import React from "react";
import logo from "./assets/logo.png";

const Home = () => {
	return (
		<section
			id="home"
			className="h-screen flex flex-col justify-center items-center pb-16 mb-12"
		>
			<div>
				<img src={logo} alt="" />
				<div className="flex justify-center items-center">
					<h4 className="text-lg text-red-600 font-extrabold">
						Inflatables&nbsp; <span className="text-lg text-stone-100">|</span>
						&nbsp;
					</h4>
					<h4 className="text-lg text-blue-600 font-extrabold">
						Games&nbsp; <span className="text-lg text-stone-100">|</span>&nbsp;
					</h4>
					<h4 className="text-lg text-yellow-500 font-extrabold">Equipment</h4>
				</div>
			</div>
			<p className="text-white flex justify-center py-8 px-8 lg:px-56 mb-8 md:mb-24 slide-left">
				Welcome to DZ Rentals, the premier destination for all your rental
				needs. At DZ Rentals, we take pride in being your go-to, family-friendly
				rental company, offering an exciting array of top-tier themed
				inflatables that promise endless fun for kids and adults alike. But
				that's just the beginning! Whether you're planning a birthday party,
				corporate event, or a casual backyard get-together, we've got you
				covered with our extensive selection of yard games, equipment, and party
				essentials. From chairs to tables, power wash machines, and beyond, our
				commitment to quality and customer satisfaction shines through in
				everything we do. Let us help you turn your special moments into
				unforgettable memories. Welcome to the DZ Rentals experience!
			</p>
		</section>
	);
};

export default Home;
