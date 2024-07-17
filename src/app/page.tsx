import Header from "@/components/Header";
import MyServices from "@/components/my-services";
import ServiceSlider from "@/components/service-slider";
import dynamic from "next/dynamic";

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
	ssr: false,
});
const images =
	"https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg";
const images2 =
	"https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg";
const images3 =
	"https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg";
const images4 =
	"https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.jpg";
const images5 =
	"https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.jpg";
const images6 =
	"https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.jpg";
const images7 =
	"https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.jpg";

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
		{
			src: images,
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
				innerSize={8}
				outerSize={35}
				innerScale={1}
				outerScale={1.7}
				outerAlpha={0}
				outerStyle={{
					mixBlendMode: "exclusion",
				}}
			/>
			<div className="min-h-screen bg-black text-white">
				<div className="grid place-items-center">
					<Header />
				</div>

				<main className="flex flex-col items-center justify-center text-center ">
					<section
						className="bg-cover grid w-full place-items-center bg-center min-h-screen"
						style={{
							backgroundImage: "url(/home/background.jpg)",
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
						className="hero min-h-screen"
						style={{
							backgroundImage: "url(/services/background.jpg)",
						}}
					>
						<h2 className="text-5xl md:text-7xl font-bold">
							Web Designer
						</h2>

						<ServiceSlider
							imgs={placeholderImages}
							carouselId="placeholder-carousel"
							classNameCarousel="rounded-box"
						/>
					</section>
				</main>
			</div>
		</>
	);
}
