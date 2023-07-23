// Game.js
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import StickFigure from './StickFigure';

const Game = () => {
	const cameraRef = useRef();

	useFrame(() => {
		// Move the camera horizontally (x-axis) to create the side-scrolling effect
		const speed = 0.01;
		cameraRef.current.position.x += speed;
	});

	return (
		<Canvas>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<StickFigure position={[0, 0, 0]} />
			<OrbitControls />
		</Canvas>
	);
};

export default Game;
