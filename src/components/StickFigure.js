// StickFigure.js
import React from 'react';
import { useFrame } from '@react-three/fiber';

const StickFigure = ({ position }) => {
	return <mesh position={position}>{/* Your stick figure 3D model */}</mesh>;
};

export default StickFigure;
