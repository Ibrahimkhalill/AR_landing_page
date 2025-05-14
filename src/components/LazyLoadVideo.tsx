import React, { useState, useEffect } from 'react';
import useIntersectionObserver from './useIntersectionObserver';

const LazyLoadVideo = ({ src }: { src: string }) => {
	const [isIntersecting, ref] = useIntersectionObserver({ threshold: 0.5 });
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		// Once the video is in the viewport, stop showing the loading indicator
		if (isIntersecting) {
			setIsLoading(false);
		}
	}, [isIntersecting]);

	return (
		<div ref={ref} className="relative">
			{isLoading && (
				<div className="absolute inset-0 flex justify-center items-center bg-black/50">
					<span className="loader_spain"></span>
				</div>
			)}
			{isIntersecting ? (
				<video
					src={src}
					loop
					muted
					autoPlay
					className="w-full h-[500px] object-cover rounded-xl md:h-[600px] lg:h-[700px]"
					onLoad={() => setIsLoading(true)}
					onLoadStart={() => setIsLoading(false)} // Ensures loading indicator disappears once the video starts loading
				/>
			) : (
				<div className="bg-gray-200 h-[500px] md:h-[600px] lg:h-[700px]" />
			)}
		</div>
	);
};

export default LazyLoadVideo;
