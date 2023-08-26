import { useEffect } from "react";
import { animateElements, checkSlide } from "./animations.js";

const Contact = () => {
	useEffect(() => {
		window.addEventListener("scroll", animateElements);
		window.addEventListener("scroll", checkSlide);
		return () => {
			window.removeEventListener("scroll", animateElements);
			window.removeEventListener("scroll", checkSlide);
		};
	}, []);

	return (
		<section id="contact" className="mx-auto pt-16 pb-12">
			<h2 className="flex justify-center text-3xl sm:text-4xl font-bold text-gray-400 mt-12 mb-4 slide-right">
				Contact Me!
			</h2>
			<div className="grid grid-cols-12 justify-center">
				<div className="col-span-12 md:col-start-3 md:col-span-8 px-4">
					<form
						className="slide-left"
						action="https://formcarry.com/s/kH5_-KjRfa"
						method="POST"
						encType="multipart/form-data"
					>
						<div className="grid md:grid-cols-2 gap-4 w-full py-2">
							<div className="flex flex-col">
								<label className="uppercase text-sm py-2 text-gray-200">
									Name
								</label>
								<input
									className="border-2 rounded-lg p-3 flex border-gray-300"
									type="text"
									name="phone"
								/>
							</div>
							<div className="flex flex-col">
								<label className="uppercase text-sm py-2 text-gray-200">
									Phone Number
								</label>
								<input
									className="border-2 rounded-lg p-3 flex border-gray-300"
									type="text"
									name="name"
								/>
							</div>
						</div>
						<div className="flex flex-col py-2">
							<label className="uppercase text-sm py-2 text-gray-200">
								Email
							</label>
							<input
								className="border-2 rounded-lg p-3 flex border-gray-300"
								type="email"
								name="email"
							/>
						</div>
						<div className="flex flex-col py-2">
							<label className="uppercase text-sm py-2 text-gray-200">
								Subject
							</label>
							<input
								className="border-2 rounded-lg p-3 flex border-gray-300"
								type="text"
								name="subject"
							/>
						</div>
						<div className="flex flex-col py-2">
							<label className="uppercase text-sm py-2 text-gray-200">
								Message
							</label>
							<textarea
								className="border-2 rounded-lg p-3 border-gray-300"
								rows="10"
								name="message"
							/>
						</div>
						<button className="bg-red-600 text-gray-200 mt-4 w-full p-4 rounded-lg">
							Submit
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
