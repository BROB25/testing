import React from "react";
import logo from "./assets/logo.png";

const Home = () => {
	return (
		<section
			id="home"
			className="h-screen flex flex-col justify-center items-center pb-16"
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
			<p className="text-white flex justify-center py-8 px-8 lg:px-56">
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia nisi
				modi dolor tempora quis veritatis minima, alias atque sit. Inventore,
				sed quas architecto assumenda dolor dolorum nostrum alias consequuntur
				ipsam odit, repudiandae modi tempore consequatur tempora harum! Laborum,
				ab numquam.
			</p>
		</section>
	);
};

export default Home;
