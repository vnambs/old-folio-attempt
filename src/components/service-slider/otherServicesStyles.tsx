import { useRef } from "react";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./style.module.scss";

type Iimg = {
	src: string;
	alt?: string;
	color: string;
};

interface SliderItem {
	imgs: Iimg[];
	imgsTwo: Iimg[];
}

export default function Index({ imgs, imgsTwo }: SliderItem) {
	const container = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});

	const x1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
	const x2 = useTransform(scrollYProgress, [0, 1], [0, -150]);

	return (
		<div className="flex md:w-full m-4 overflow-hidden  backdrop-blur-[30px] bg-transparent mask-gradient">
			<div ref={container} className={styles.slidingImages}>
				<motion.div style={{ x: x1 }} className={styles.slider}>
					{imgs.map((img, index) => (
						<div
							key={index}
							className={styles.project}
							style={{ backgroundColor: img.color }}
						>
							<div className={styles.imageContainer}>
								<Image fill alt="image" src={img.src} />
							</div>
						</div>
					))}
				</motion.div>
				<motion.div style={{ x: x2 }} className={styles.slider}>
					{imgsTwo.map((img, index) => (
						<div
							key={index}
							className={styles.project}
							style={{ backgroundColor: img.color }}
						>
							<div id="image_2" className={styles.imageContainer}>
								<Image fill alt="image" src={img.src} />
							</div>
						</div>
					))}
				</motion.div>
			</div>
		</div>
	);
}
