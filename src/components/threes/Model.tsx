import {
	useGLTF,
	Text,
	Float,
	MeshTransmissionMaterial,
} from "@react-three/drei";
import React from "react";
import { useThree } from "@react-three/fiber";
import { useControls } from "leva";
import { Object3D } from "three";

interface MeshProps {
	data: Object3D;
}
function Font() {
	return (
		<group>
			<Text
				position={[0, 0, -0.1]}
				fontSize={0.4}
				color="white"
				anchorX="center"
				anchorY="middle"
			>
				404
			</Text>
			<Text
				position={[0, -0.25, -0.1]}
				fontSize={0.03}
				color="white"
				anchorX="center"
				anchorY="middle"
			>
				The link is broken
			</Text>
		</group>
	);
}

function Meshs({ data }: MeshProps) {
	const materialProps = useControls({
		thickness: { value: 0.275, min: 0, max: 1, step: 0.01 },
		ior: { value: 1.8, min: 0, max: 3, step: 0.1 },
		chromaticAberration: { value: 0.75, min: 0, max: 1 },
		resolution: { value: 300 },
	});

	return (
		<Float>
			<mesh {...data}>
				<MeshTransmissionMaterial
					roughness={0}
					transmission={0.99}
					{...materialProps}
				/>
			</mesh>
		</Float>
	);
}

export default function Model() {
	const { viewport } = useThree();
	const { nodes } = useGLTF("/medias/shards.glb");
	return (
		<group scale={viewport.width / 1.5}>
			{nodes.Scene.children.map((mesh, i) => {
				return <Meshs data={mesh} key={i} />;
			})}
			<Font />
		</group>
	);
}
