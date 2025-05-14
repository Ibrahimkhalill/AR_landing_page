import React from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const LazyLoadModelViewer = ({ src }) => {
	// const [isIntersecting, ref] = useIntersectionObserver({ threshold: 0.5 });

	return (
		<div>
			<model-viewer
				src={src}
				alt="3D food model"
				shadow-intensity="1"
				camera-controls
				touch-action="pan-y"
				auto-rotate
				ar
				skybox-height="2m"
				max-camera-orbit="auto 90deg auto"
				ar-modes="scene-viewer quick-look webxr"
				style={{
					width: '100%',
					height: '40vh',
					borderRadius: '12px',
					boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
					backgroundColor: '#fff',
				}}></model-viewer>
		</div>
	);
};

export default LazyLoadModelViewer;
