import { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

function Gallery() {
	useEffect(() => {
		AOS.init({
			duration: 2000,
			easing: 'ease-in-out',
		});
		AOS.refresh();
	}, []);

	return (
		<section className="container mt-84px mx-auto">
			<section className="overflow-hidden text-gray-700 md:my-5 my-10">
				<div className="container px-5 py-2 mx-auto lg:pt-24 md:px-20">
					<div className="flex justify-center mb-3">
						<h2 className="bg-secondary hover:bg-primary md:text-base text-sm py-2 px-10 mt-10 text-center text-white cursor-default">
							Startup Incubation
						</h2>
					</div>
					<div className=" space-y-5 my-8">
						<p className="md:text-xl text-lg font-bold text-center capitalize font-varela leading-relaxed text-secondary">
							We are an ecosystem built to support ICT focused tech
							entrepreneurs and young individuals integrating the STEM pedagogy.
						</p>
					</div>
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="./gallery/landscape/4.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-up">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/idea.png"
								/>
							</div>
							<div className="md:w-full p-1 md:p-2" data-aos="fade-left">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/youth.jpg"
								/>
							</div>
						</div>
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-full p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/youthh.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-down">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/gallery/portrait/1.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/gallery/portrait/4.jpeg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="overflow-hidden text-gray-700 md:my-5 my-10">
				<div className="container px-5 py-2 mx-auto lg:pt-24 md:px-20">
					<div className="flex justify-center my-3">
						<h2 className="bg-secondary hover:bg-primary md:text-base text-sm py-2 px-10 text-center text-white cursor-default">
							Capacity-Building Workshops for Women
						</h2>
					</div>
					<div className="space-y-5 my-8">
						<p className="md:text-xl text-lg font-bold text-center capitalize font-varela leading-relaxed text-secondary">
							We conducted workshops focusing on digital skills,
							entrepreneurship, and MSME development specifically for women in
							Northern Nigeria to empowered women with the skills needed to
							start and grow their businesses
						</p>
					</div>
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/meeting.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-up">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/girl.png"
								/>
							</div>
							<div className="md:w-full p-1 md:p-2" data-aos="fade-left">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/women.jpeg"
								/>
							</div>
						</div>
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-full p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/womennn.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-down">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/girls.png"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/pres.jpeg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="overflow-hidden text-gray-700 md:my-5 my-10">
				<div className="container px-5 py-2 mx-auto lg:pt-24 md:px-20">
					<div className="flex justify-center mb-3">
						<h2 className="bg-secondary hover:bg-primary md:text-base text-sm py-2 px-10 text-center text-white cursor-default">
							Kids Bootcamps
						</h2>
					</div>
					<div className="space-y-5 my-8">
						<p className="md:text-xl text-lg font-bold text-center capitalize font-varela leading-relaxed text-secondary">
							We regularly organized summer bootcamps for kids at the STEMLAB
							Hub, offering courses in Canva design, Python programming, Virtual
							Reality, Game Development, and Web Development.
						</p>
					</div>
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/gallery/landscape/kid.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-up">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/01.jpg"
								/>
							</div>
							<div className="md:w-full p-1 md:p-2" data-aos="fade-left">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/gallery/portrait/2.jpeg"
								/>
							</div>
						</div>
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-full p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/gallery/landscape/kid.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-down">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/gallery/portrait/5.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/gallery/portrait/3.jpeg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="overflow-hidden text-gray-700 md:my-5 my-10">
				<div className="container px-5 py-2 mx-auto lg:pt-24 md:px-20">
					<div className="flex justify-center mb-3">
						<h2 className="bg-secondary hover:bg-primary md:text-base text-sm py-2 px-10 text-center text-white cursor-default">
							Co-working space
						</h2>
					</div>
					<div className="space-y-5 my-8">
						<p className="md:text-xl text-lg font-bold text-center capitalize font-varela leading-relaxed text-secondary">
							We Offered collaborative workspaces to foster networking and
							support among startups.
						</p>
					</div>
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/office.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-up">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/02.jpg"
								/>
							</div>
							<div className="md:w-full p-1 md:p-2" data-aos="fade-left">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/work.jpeg"
								/>
							</div>
						</div>
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-full p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/netwook.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-down">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/office.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/pres.jpeg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section className="overflow-hidden text-gray-700 md:my-5 my-10">
				<div className="container px-5 py-2 mx-auto lg:pt-24 md:px-20">
					<div className="flex justify-center my-3">
						<h2 className="bg-secondary hover:bg-primary md:text-base text-sm py-2 px-10 text-center text-white cursor-default">
							Mentorship Program for Young Female Entrepreneurs
						</h2>
					</div>
					<div className="space-y-5 my-8">
						<p className="md:text-xl text-lg font-bold text-center capitalize font-varela leading-relaxed text-secondary">
							we organize mentorship initiative connecting young female
							entrepreneurs with experienced business leaders to provide
							guidance and support to enhanced the confidence and skills among
							young women, leading to successful business ventures
						</p>
					</div>
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/meeting.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-up">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/pic.jpg"
								/>
							</div>
							<div className="md:w-full p-1 md:p-2" data-aos="fade-left">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="./images/cert.jpg"
								/>
							</div>
						</div>
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-full p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/meeting.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-down">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/cert.jpg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/pitch.jpeg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="overflow-hidden text-gray-700 md:my-5 my-10">
				<div className="container px-5 py-2 mx-auto lg:pt-24 md:px-20">
					<div className="flex justify-center my-3">
						<h2 className="bg-secondary hover:bg-primary md:text-base text-sm py-2 px-10 text-center text-white cursor-default">
							Startup Incubation
						</h2>
					</div>
					<div className="space-y-5 my-8">
						<p className="md:text-xl text-lg font-bold text-center capitalize font-varela leading-relaxed text-secondary">
							We organized events to connect entrepreneurs, investors, and key
							players in the startup ecosystem
						</p>
					</div>
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/train.jpg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-up">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/presss.jpeg"
								/>
							</div>
							<div className="md:w-full p-1 md:p-2" data-aos="fade-left">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/press.jpg"
								/>
							</div>
						</div>
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-full p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/pitch.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-down">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/yout.jpg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/abd.jpg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="overflow-hidden text-gray-700 md:my-5 my-10">
				<div className="container px-5 py-2 mx-auto lg:pt-24 md:px-20">
					<div className="flex justify-center my-3">
						<h2 className="bg-secondary hover:bg-primary md:text-base text-sm py-2 px-10 text-center text-white cursor-default">
							Networking and Community Events
						</h2>
					</div>
					<div className="space-y-5 my-8">
						<p className="md:text-xl text-lg font-bold text-center capitalize font-varela leading-relaxed text-secondary">
							We organized events to connect entrepreneurs, investors, and key
							players in the startup ecosystem
						</p>
					</div>
					<div className="flex flex-wrap -m-1 md:-m-2">
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/network.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-up">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="images/pres.jpeg"
								/>
							</div>
							<div className="md:w-full p-1 md:p-2" data-aos="fade-left">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/netwook.jpeg"
								/>
							</div>
						</div>
						<div className="md:flex flex-wrap md:w-1/2">
							<div className="md:w-full p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/meetup.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-down">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/gallery/landscape/training.jpeg"
								/>
							</div>
							<div className="md:w-1/2 p-1 md:p-2" data-aos="fade-right">
								<img
									alt="gallery"
									className="block object-cover object-center w-full h-full rounded-lg"
									src="/images/event.jpeg"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	);
}

export default Gallery;
