// create Header components here
import Link from "next/link";
import React from "react";
import { CodeCircle } from "iconsax-react";

const Header = () => {
	return (
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
					<Link href="/services" className="text-white opacity-100">
						Services
					</Link>
					<span className="block w-px h-5 bg-[rgb(218,197,167)]" />
					<Link href="/work" className="text-white opacity-100">
						Work
					</Link>
					<span className="block w-px h-5 bg-[rgb(218,197,167)]" />
					<Link href="/about" className="text-white opacity-100">
						About
					</Link>
					<span className="block w-px h-5 bg-[rgb(218,197,167)]" />
					<Link href="/blog" className="text-white opacity-100">
						Blog
					</Link>
				</nav>
				<div className="flex items-center ml-6 opacity-100">
					<Link href="/contact" className="text-white opacity-100">
						<span className="backdrop-blur-[15px] bg-[rgb(218,197,167)] border border-[rgba(218,197,167,0.15)] rounded-sm text-black py-2 px-4">
							Let&apos;s talk
						</span>
					</Link>
				</div>
			</div>
		</header>
	);
};

export default Header;
