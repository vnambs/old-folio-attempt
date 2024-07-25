import Header from "@/components/Header";
import ModalList from "@/components/modals-list";
import MyServices from "@/components/my-services";
import ServiceSlider from "@/components/service-slider";
import ServicesCard from "@/components/services-card";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
	ssr: false,
});
const images = "/services/php.png";
const images2 = "/services/laravel.png";
const images3 = "/services/html5.png";
const images4 = "/services/Javascript.png";
const images5 = "/services/css.png";
const images6 = "/services/typescript.png";
const images7 = "/services/jquerry.png";
const images8 = "/services/Bootstrap.png";
const images9 = "/services/react.png";
const images10 = "/services/sass.png";
const images11 = "/services/nodejs.png";
const images12 = "/services/wordpress.png";
const images13 = "/services/gitlab.png";
const images14 = "/services/wordpress.png";
const images15 = "/services/github.png";

const background = "url('/home/background.jpg')";

export default function Home() {
	const placeholderImages = [
		{
			src: images,
			alt: "image-1",
		},
		{
			src: images2,
			alt: "image-2",
		},
		{
			src: images3,
			alt: "image-3",
		},
		{
			src: images4,
			alt: "image-4",
		},
		{
			src: images5,
			alt: "image-5",
		},
		{
			src: images6,
			alt: "image-6",
		},
		{
			src: images7,
			alt: "image-7",
		},
		{
			src: images8,
			alt: "image-8",
		},
		{
			src: images9,
			alt: "image-9",
		},
		{
			src: images10,
			alt: "image-10",
		},
		{
			src: images11,
			alt: "image-11",
		},
		{
			src: images12,
			alt: "image-12",
		},
		{
			src: images13,
			alt: "image-13",
		},
		{
			src: images14,
			alt: "image-14",
		},
		{
			src: images15,
			alt: "image-1",
		},
		{
			src: images2,
			alt: "image-22",
		},
		{
			src: images3,
			alt: "image-3",
		},
		{
			src: images4,
			alt: "image-4",
		},
		{
			src: images5,
			alt: "image-5",
		},
		{
			src: images6,
			alt: "image-6",
		},
		{
			src: images7,
			alt: "image-7",
		},
		{
			src: images,
			alt: "image-8",
		},
		{
			src: images2,
			alt: "image-9",
		},
		{
			src: images3,
			alt: "image-10",
		},
		{
			src: images4,
			alt: "image-11",
		},
		{
			src: images5,
			alt: "image-12",
		},
		{
			src: images6,
			alt: "image-13",
		},
		{
			src: images7,
			alt: "image-14",
		},
	];
	return (
		<>
			<AnimatedCursor
				color="255, 255, 255"
				innerSize={8}
				outerSize={35}
				innerScale={1}
				outerScale={1.7}
				outerAlpha={1}
				outerStyle={{
					mixBlendMode: "exclusion",
				}}
			/>
			<div className="grid place-items-center">
				<Header />
			</div>

			<div className="min-h-screen bg-black text-white">
				<main className="bg-repeat md:bg-cover grid w-full place-items-center bg-center min-h-screen ">
					<section
						className="bg-cover grid w-full place-items-center bg-center min-h-screen"
						style={{
							backgroundImage: background,
						}}
					>
						<div className="hero-content text-center">
							<div className="max-w-md">
								<h2 className="text-5xl md:text-7xl font-bold">
									Web Designer
								</h2>
								<h3 className="text-3xl md:text-5xl italic">
									{" "}
									& Developer
								</h3>
								<p className="text-xl md:text-2xl mt-5">
									Premium Web Design, Development, and SEO
									services to help your business stand out.
								</p>
							</div>
						</div>
						<div className="bottom-2 absolute">
							<MyServices />
						</div>
					</section>
					<section
						id="my-services"
						className="flex md:grid w-full place-items-center bg-center min-h-screen"
						style={{
							backgroundImage: background,
						}}
					>
						<div className="relative grid top-16">
							<ServiceSlider
								imgs={placeholderImages}
								carouselId="placeholder-carousel"
								classNameCarousel="rounded-box"
							/>
							<div className="place-items-center max-w-screen-sm md:max-w-full grid md:w-auto md:flex md:flex-row md:gap-4 mx-auto p-4">
								<ServicesCard
									number="01"
									title="WEB DESIGN"
									description="Visually stunning web designs that captivate your audience by blending your brand voice and customer needs."
									linkText="ABOUT WEB DESIGN"
									link="https://www.google.com"
								/>
								<ServicesCard
									number="02"
									title="WEB DESIGN"
									description="Visually stunning web designs that captivate your audience by blending your brand voice and customer needs."
									linkText="ABOUT WEB DESIGN"
									link="https://www.google.com"
								/>
								<ServicesCard
									number="03"
									title="WEB DESIGN"
									description="Visually stunning web designs that captivate your audience by blending your brand voice and customer needs."
									linkText="ABOUT WEB DESIGN"
									link="https://www.google.com"
								/>
							</div>
						</div>
					</section>
					<section
						id="my-work"
						className="flex md:grid w-full place-items-center bg-center min-h-screen"
						style={{
							backgroundImage: background,
						}}
					>
						<div className="relative grid top-16">
							<div className="place-items-center max-w-screen-sm md:max-w-full grid md:w-auto md:flex md:flex-row md:gap-4 mx-auto p-4">
								<ModalList />
							</div>
						</div>
					</section>
				</main>
			</div>
		</>
	);
}
