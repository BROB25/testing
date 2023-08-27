import React from "react";
import logo from "/Users/BROB/Desktop/lol/dzrentals/dist/assets/logo.png";

const Home = () => {
	return (
		<section
			id="home"
			className="h-screen flex justify-center items-center pb-16"
		>
			<div>
				<img src={logo} alt="" />
				<div className="flex justify-center items-center">
					<h4 className="text-lg text-red-600 font-bold">
						Bouncies&nbsp; <span className="text-lg text-stone-100">|</span>
						&nbsp;
					</h4>
					<h4 className="text-lg text-blue-600 font-bold">
						Games&nbsp; <span className="text-lg text-stone-100">|</span>&nbsp;
					</h4>
					<h4 className="text-lg text-yellow-500 font-bold">Equipment</h4>
				</div>
			</div>
		</section>
	);
};

export default Home;
