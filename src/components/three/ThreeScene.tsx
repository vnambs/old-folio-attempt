"use client";

import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const ThreeScene: React.FC = () => {
	const containerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const container = containerRef.current;
		if (!container) return;

		// Initialize the scene, camera, and renderer
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(
			75,
			window.innerWidth / window.innerHeight,
			0.1,
			1000
		);
		const renderer = new THREE.WebGLRenderer();
		renderer.setSize(window.innerWidth, window.innerHeight);
		container.appendChild(renderer.domElement);
		camera.position.z = 5;

		// Add a cube to the scene
		const geometry = new THREE.BoxGeometry();
		const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
		const cube = new THREE.Mesh(geometry, material);
		scene.add(cube);

		// Render function
		const renderScene = () => {
			cube.rotation.x += 0.01;
			cube.rotation.y += 0.01;
			renderer.render(scene, camera);
			requestAnimationFrame(renderScene);
		};

		// Start the animation loop
		renderScene();

		// Handle window resize
		const handleResize = () => {
			camera.aspect = window.innerWidth / window.innerHeight;
			camera.updateProjectionMatrix();
			renderer.setSize(window.innerWidth, window.innerHeight);
		};
		window.addEventListener("resize", handleResize);

		// Cleanup on component unmount
		// eslint-disable-next-line consistent-return
		return () => {
			window.removeEventListener("resize", handleResize);
			if (container && renderer.domElement) {
				container.removeChild(renderer.domElement);
			}
			renderer.dispose();
		};
	}, []);

	return <div ref={containerRef} />;
};

export default ThreeScene;
