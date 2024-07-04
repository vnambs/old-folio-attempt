import Header from "@/components/Header";

export default function Home() {
	return (
		<div className="min-h-screen bg-black text-white">
			<div className="grid place-items-center">
				<Header />
			</div>

			<main className="flex flex-col items-center justify-center text-center ">
				<div
					className="hero min-h-screen"
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
				</div>
			</main>
		</div>
	);
}
