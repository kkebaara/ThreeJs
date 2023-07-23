// StickFigure.js
import React from 'react';
import { useGLTF } from '@react-three/drei';

const StickFigure = ({ position }) => {
	const { scene } = useGLTF('/path/to/stick_figure.glb');

	return <primitive object={scene} position={position} />;
};

export default StickFigure;
