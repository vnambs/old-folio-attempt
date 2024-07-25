// create Header components here
import Link from "next/link";
import React from "react";
import { CodeCircle, HambergerMenu } from "iconsax-react";

const Header = () => {
	return (
		<>
			<header className="navbar rounded-lg fixed top-6 w-auto backdrop-blur-[30px] bg-transparent border border-[rgb(233,233,233)] opacity-100  hidden md:block z-50">
				<div className="flex justify-between items-center p-5">
					<div className="flex items-center space-x-4">
						<Link href="/">
							<span className="block w-full h-full opacity-100 mr-4">
								{/* <div
								className="w-16 h-6 bg-no-repeat bg-contain"
								style={{
									backgroundImage: 'url("/logo/logo.png")',
								}} // Replace with the path to your logo
							/> */}
								<CodeCircle
									size="32"
									color="#e9e9e9"
									variant="Broken"
								/>
							</span>
						</Link>
					</div>
					<nav className="flex items-center space-x-4 opacity-100">
						<Link
							href="#my-services"
							className="text-white opacity-100"
						>
							Services
						</Link>
						<span className="block w-px h-5 bg-[rgb(218,197,167)]" />
						<Link
							href="/#my-work"
							className="text-white opacity-100"
						>
							Work
						</Link>
						<span className="block w-px h-5 bg-[rgb(218,197,167)]" />
						<Link
							href="/#about-me"
							className="text-white opacity-100"
						>
							About
						</Link>
						<span className="block w-px h-5 bg-[rgb(218,197,167)]" />
						<Link
							href="/#my-blog"
							className="text-white opacity-100"
						>
							Blog
						</Link>
					</nav>
					<div className="flex items-center ml-6 opacity-100">
						<Link
							href="/contact"
							className="text-white opacity-100"
						>
							<span className="backdrop-blur-[15px] bg-[rgb(218,197,167)] border border-[rgba(218,197,167,0.15)] rounded-sm text-black py-2 px-4">
								Let&apos;s talk
							</span>
						</Link>
					</div>
				</div>
			</header>
			<header className="navbar rounded-lg w-9/12 text-xl max-w-screen fixed top-6 backdrop-blur-[30px] bg-transparent border border-[rgb(233,233,233)] opacity-100 z-50 md:hidden">
				<div className="flex items-center gap-8 p-5">
					<div className="flex items-center space-x-4">
						<Link href="/">
							<span className="block w-full h-full opacity-100 mr-4">
								{/* <div
								className="w-16 h-6 bg-no-repeat bg-contain"
								style={{
									backgroundImage: 'url("/logo/logo.png")',
								}} // Replace with the path to your logo
							/> */}
								<CodeCircle
									size="32"
									color="#e9e9e9"
									variant="Broken"
								/>
							</span>
						</Link>
					</div>
					<div className="flex items-center opacity-100">
						<Link
							href="/contact"
							className="text-white opacity-100"
						>
							<span className="backdrop-blur-[15px] bg-[rgb(218,197,167)] border border-[rgba(218,197,167,0.15)] rounded-sm text-black py-2 px-4">
								Let&apos;s talk
							</span>
						</Link>
					</div>
					<div className="dropdown dropdown-bottom dropdown-end">
						<div
							aria-hidden="true"
							tabIndex={0}
							role="button"
							className="float-right"
						>
							<HambergerMenu
								size="32"
								color="#e9e9e9"
								variant="Bulk"
							/>
						</div>
						<div
							aria-hidden="true"
							tabIndex={0}
							className="menu dropdown-content bg-base-100 rounded-box z-[1] mt-4 w-52 p-2 shadow"
						>
							<Link href="/#my-services" className="opacity-100">
								Services
							</Link>
							<Link href="/#my-work" className="opacity-100">
								Work
							</Link>
							<Link href="/#about-me" className=" opacity-100">
								About
							</Link>
							<Link href="/#my-blog" className=" opacity-100">
								Blog
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
