import { useReducer, useRef, useState } from 'react';
import product_img_1 from './images/image-product-1.jpg';
import product_img_2 from './images/image-product-2.jpg';
import product_img_3 from './images/image-product-3.jpg';
import product_img_4 from './images/image-product-4.jpg';
import ThumbnailsList from './ThumbnailsList';
import { useGlobalContext } from './context';

const ProductPhotos = () => {
	const {
		activeImageIndex,
		setActiveImageIndex,
		changeActivePhoto,
		setIsZoomOpen,
		isZoomOpen,
	} = useGlobalContext();

	const handleZoom = () => {
		if (isZoomOpen) return;
		if (window.innerWidth < 900) return;
		const zoomContainer = document.getElementById('zoom_container');
		zoomContainer.showModal();
		setIsZoomOpen(true);
	};

	return (
		<section className="product_photos">
			<div className="product_photos_container">
				<div
					className="carousel"
					data-carousel
					onClick={handleZoom}
				>
					<button
						type="button"
						className="btn carousel_btn prev"
						onClick={changeActivePhoto}
					>
						<svg
							width="12"
							height="18"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M11 1 3 9l8 8"
								stroke="currentcolor"
								strokeWidth="3"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
					</button>
					<button
						type="button"
						className="btn carousel_btn next"
						onClick={changeActivePhoto}
					>
						<svg
							width="13"
							height="18"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="m2 1 8 8-8 8"
								stroke="currentcolor"
								strokeWidth="3"
								fill="none"
								fillRule="evenodd"
							/>
						</svg>
					</button>
					<ul
						data-slides
						id="slides"
					>
						<li
							className="slide"
							data-active
							autoFocus
						>
							<img
								data-photo="1"
								src={product_img_1}
								alt="product image"
							/>
						</li>
						<li className="slide">
							<img
								data-photo="2"
								src={product_img_2}
								alt="product image"
							/>
						</li>
						<li className="slide">
							<img
								data-photo="3"
								src={product_img_3}
								alt="product image"
							/>
						</li>
						<li className="slide">
							<img
								data-photo="4"
								src={product_img_4}
								alt="product image"
							/>
						</li>
					</ul>
				</div>
				<ThumbnailsList />
			</div>
		</section>
	);
};

export default ProductPhotos;
