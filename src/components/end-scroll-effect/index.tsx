import { useScroll, useTransform, motion } from "framer-motion";
import { MutableRefObject } from "react";
import styles from "./style.module.scss";

interface IndexPageProps {
	container: MutableRefObject<HTMLElement | null>;
}

const IndexPage = ({ container }: IndexPageProps) => {
	const { scrollYProgress } = useScroll({
		target: container,
		offset: ["start end", "end start"],
	});
	const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);

	return (
		<motion.div style={{ height }} className={styles.circleContainer}>
			<div className={styles.circle}> </div>
		</motion.div>
	);
};

export default IndexPage;
