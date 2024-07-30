import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/three/Scene"), {
	ssr: true,
});

export default async function NotFound() {
	return (
		<main className="relative h-screen">
			<Scene />
		</main>
	);
}
