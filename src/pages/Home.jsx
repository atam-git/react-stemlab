import Animation from '../components/Animation';
import Stem from '../components/Stem';

function Home() {
	return (
		<main>
			<section className="relative flex-between w-100% md:flex-row xs:flex-col xs:pt-134px sm:px-50px xl:px-100px gap-8 min-h-620px max-w-1024px">
				<div className="grid"></div>
				<div className="md:w-50% w-100% h-100%">
					<div className="card-info w-100% h-100% flex-center flex-col gap-8">
						<h1 className="text-4xl text-center md:text-left font-semibold">
							Empowering Young Talent and future entrepreneurs in Northern
							Nigeria
						</h1>
						<h2 className="text-1xl text-center md:text-left font-normal">
							STEM INNOVATION LAB provides tailored services for women and youth
							in Northern Nigeria, meeting the selection criteria for the
							Digital Skills for Entrepreneurs (DSE) project.
						</h2>
					</div>
				</div>
				<div className="stem lg:w-400px lg:h-400px md:w-300px md:h-300px sm:w-350px sm:h-350px xs:w-300px xs:h-300px">
					<div className="wrapper">
						<Stem />
					</div>
				</div>
			</section>
			<section id="services" className="text-gray-700 body-font">
				<div className="md:container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h2 className="text-xs blue tracking-widest font-medium title-font mb-1">
							STEM INNOVATORS LAB
						</h2>
						<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
							OUR SERVICES
						</h1>
					</div>
					<div className="flex flex-wrap -m-4">
						<div className="p-4 md:w-1/3">
							<div
								id="hoverOrange"
								className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
							>
								<div className="flex items-center mb-3">
									<div className="w-10 h-10 mr-3 flex-center rounded-full bgBlue text-white flex-shrink-0">
										<span className="linkage"></span>
									</div>
									<h2 className="text-gray-900 text-lg title-font font-medium">
										Linkage Facilitation
									</h2>
								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">
										We connect entrepreneurs with stakeholders, industry
										leaders, and investors to enhance business opportunities and
										access resources, fostering a vibrant entrepreneurial
										ecosystem.
									</p>
									<a className="mt-3 learn-more-link blue inline-flex items-center">
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4 ml-2"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>

						<div className="p-4 md:w-1/3">
							<div
								id="hoverOrange"
								className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
							>
								<div className="flex items-center mb-3">
									<div className="w-10 h-10 mr-3 flex-center rounded-full bgBlue text-white flex-shrink-0">
										<span className="training"></span>
									</div>
									<h2 className="text-gray-900 text-lg title-font font-medium">
										Training and Capacity Building
									</h2>
								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">
										We offer workshops and training sessions to enhance digital
										skills and entrepreneurship, focusing on women, youth, and
										marginalized communities, providing inclusive support and
										necessary resources.
									</p>
									<a className="mt-3 learn-more-link blue inline-flex items-center">
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4 ml-2"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="p-4 md:w-1/3">
							<div
								id="hoverOrange"
								className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
							>
								<div className="flex items-center mb-3">
									<div className="w-10 h-10 mr-3 flex-center rounded-full bgBlue text-white flex-shrink-0">
										<span className="webdev"></span>
									</div>
									<h2 className="text-gray-900 text-lg title-font font-medium">
										Web and Internet Development
									</h2>
								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">
										We help businesses establish a strong online presence by
										creating visually appealing, functional websites optimized
										for performance and user experience.
									</p>
									<a className="mt-3 learn-more-link blue inline-flex items-center">
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4 ml-2"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="p-4 md:w-1/3">
							<div
								id="hoverOrange"
								className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
							>
								<div className="flex items-center mb-3">
									<div className="w-10 h-10 mr-3 flex-center rounded-full bgBlue text-white flex-shrink-0">
										<span className="mentorship"></span>
									</div>
									<h2 className="text-gray-900 text-lg title-font font-medium">
										Mentorship Programs
									</h2>
								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">
										We provide continuous support and guidance to help
										participants apply skills, develop business ideas, and
										achieve measurable improvements in digital competencies.
									</p>
									<a className="mt-3 learn-more-link blue inline-flex items-center">
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4 ml-2"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="p-4 md:w-1/3">
							<div
								id="hoverOrange"
								className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
							>
								<div className="flex items-center mb-3">
									<div className="w-10 h-10 mr-3 flex-center rounded-full bgBlue text-white flex-shrink-0">
										<span className="software"></span>
									</div>
									<h2 className="text-gray-900 text-lg title-font font-medium">
										Software Development
									</h2>
								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">
										We specialize in creating, launching, and maintaining
										robust, scalable software solutions that meet the highest
										quality standards and address our client`&lsquo;`s specific
										needs.
									</p>
									<a className="mt-3 learn-more-link blue inline-flex items-center">
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4 ml-2"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
						<div className="p-4 md:w-1/3">
							<div
								id="hoverOrange"
								className="flex rounded-lg h-full bg-gray-100 p-8 flex-col"
							>
								<div className="flex items-center mb-3">
									<div className="w-10 h-10 mr-3 flex-center rounded-full bgBlue text-white flex-shrink-0">
										<span className="management"></span>
									</div>
									<h2 className="text-gray-900 text-lg title-font font-medium">
										General Management Services
									</h2>
								</div>
								<div className="flex-grow">
									<p className="leading-relaxed text-base">
										We provide management consulting with specialized expertise,
										helping businesses overcome challenges and achieve goals,
										including proposals and budgets for training and mentoring
										programs for women and youth.
									</p>
									<a className="mt-3 learn-more-link blue inline-flex items-center">
										Learn More
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											className="w-4 h-4 ml-2"
											viewBox="0 0 24 24"
										>
											<path d="M5 12h14M12 5l7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div className="join-us">
					<h1 className="text-2xl text-center md:text-left font-semibold text-white">
						Participate in Meetups and Unlock Your Creative Potential
					</h1>
					<div className="action">
						<a className="mt-3 learn-more-link inline-flex items-center text-white hover ">
							Join Now
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								className="w-4 h-4 ml-2"
								viewBox="0 0 24 24"
							>
								<path d="M5 12h14M12 5l7 7-7 7"></path>
							</svg>
						</a>
					</div>
				</div>
			</section>
			<section className="text-gray-700 body-font border-t border-gray-200">
				<div
					id="programs"
					className="flex flex-col gap-5 px-5 py-24 bg-gray-100"
				>
					<div className="flex flex-col text-center w-full mb-20">
						<h3 className="text-xs blue tracking-widest font-medium title-font mb-1">
							STEMLAB INNOVATORS LAB
						</h3>
						<h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
							OUR PROGRAMS
						</h1>
					</div>
					<section className="px-2 md:px-5 flex-center flex-col md:flex-row gap-5">
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px rounded-lg flex-center shadow-custom">
							<div className="relative w-100% h-100%">
								<img
									src="/images/meeting.jpeg"
									className="w-full h-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px shadow-custom flex-center bg-white">
							<div className="p-10">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									Finance Workshops
								</h2>
								<p className="leading-relaxed text-base">
									Workshops aimed at educating women and youth on how to access
									funding, including grants, loans, and investment
									opportunities.
								</p>
								<a className="mt-20px learn-more-link blue inline-flex items-center hover">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</section>
					<section className="px-2 md:px-5 flex-center flex-col md:flex-row-reverse gap-5">
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px rounded-lg flex-center shadow-custom">
							<div className="relative w-100% h-100%">
								<img
									src="images/pitch.jpeg"
									className="w-full h-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px shadow-custom flex-center bg-white">
							<div className="p-10">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									Startup Incubation
								</h2>
								<p className="leading-relaxed text-base">
									We organized events to connect entrepreneurs, investors, and
									key players in the startup ecosystem
								</p>
								<a className="mt-20px learn-more-link blue inline-flex items-center hover">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</section>
					<section className="px-2 md:px-5 flex-center flex-col md:flex-row gap-5">
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px rounded-lg flex-center shadow-custom">
							<div className="relative w-100% h-100%">
								<img
									src="images/womennn.jpeg"
									className="w-full h-full object-cover object-center"
								/>
							</div>
						</div>
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px shadow-custom flex-center bg-white">
							<div className="p-10">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									Community-Based Business Development Training
								</h2>
								<p className="leading-relaxed text-base">
									Training sessions conducted in local communities to support
									aspiring entrepreneurs from disadvantaged backgrounds,
									focusing on business planning and management.
								</p>
								<a className="mt-20px learn-more-link blue inline-flex items-center hover">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</section>
					<section className="px-2 md:px-5 flex-center flex-col md:flex-row-reverse gap-5">
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px rounded-lg flex-center shadow-custom">
							<div className="relative w-100% h-100%">
								<span className="internship"></span>
							</div>
						</div>
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px shadow-custom flex-center bg-white">
							<div className="p-10">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									S.I.W.E.S / Internship
								</h2>
								<p className="leading-relaxed text-base">
									Our SIWES program is designed to equip you with the skills and
									expertise needed to succeed in today&apos;s tech landscape. We
									provide hands-on practical experience in software development
									and much more.
								</p>
								<a className="mt-20px learn-more-link blue inline-flex items-center hover">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</section>
					<section className="px-2 md:px-5 flex-center  flex-col md:flex-row gap-5">
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px rounded-lg flex-center shadow-custom">
							<div className="relative w-100% h-100%">
								<span className="bootcamp"></span>
							</div>
						</div>
						<div className="mx-6 md:w-340px h-450px min-h-450px lg:h-500px lg:w-500px shadow-custom flex-center bg-white">
							<div className="p-10">
								<h2 className="text-gray-900 text-lg title-font font-medium mb-3">
									Kids Holiday Bootcamps
								</h2>
								<p className="leading-relaxed text-base">
									Regularly organized summer bootcamps for kids at the STEMLAB
									Hub, offering courses in Canva design, Python programming,
									Virtual Reality, Game Development, and Web Development.
								</p>
								<a className="mt-3 learn-more-link inline-flex items-center hover">
									Learn More
									<svg
										fill="none"
										stroke="currentColor"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										className="w-4 h-4 ml-2"
										viewBox="0 0 24 24"
									>
										<path d="M5 12h14M12 5l7 7-7 7"></path>
									</svg>
								</a>
							</div>
						</div>
					</section>
				</div>
			</section>
			<section className="animation-container py-24 bg-gray-100">
				<Animation />
			</section>
			<section className="text-gray-700 body-font border-t border-gray-200">
				<div className="w-full md:container px-5 py-24 mx-auto">
					<div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							className="inline-block w-10 h-10 text-gray-400 mb-8"
							viewBox="0 0 975.036 975.036"
						>
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<p className="leading-relaxed text-lg">
							StemLab has been instrumental in the growth of our startup. Their
							mentorship and training programs provided us with the technical
							skills and business acumen needed to scale our business. The
							supportive environment and access to resources at StemLab have
							been invaluable. We couldn&apos;t have achieved our success
							without them.
						</p>
						<span className="inline-block h-1 w-10 rounded bgBlue mt-8 mb-6"></span>
						<h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
							Jamila Abdul
						</h2>
						<p className="text-gray-500">CEO of Tech Innovators Ltd</p>
					</div>
				</div>
			</section>
		</main>
	);
}

export default Home;
