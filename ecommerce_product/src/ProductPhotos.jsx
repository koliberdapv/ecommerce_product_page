import { useState } from 'react';
import product_img_1 from './images/image-product-1.jpg';
import product_img_2 from './images/image-product-2.jpg';
import product_img_3 from './images/image-product-3.jpg';
import product_img_4 from './images/image-product-4.jpg';

const ProductPhotos = () => {
	const handleArrowClick = (e) => {
		const offset = e.target.closest('.carousel_btn').classList.contains('next')
			? 1
			: -1;
		const slides = e.target
			.closest('[data-carousel]')
			.querySelector('[data-slides]');

		const activeSlide = slides.querySelector('[data-active]');
		let newIndex = [...slides.children].indexOf(activeSlide) + offset;

		if (newIndex < 0) newIndex = slides.children.length - 1;
		if (newIndex >= slides.children.length) newIndex = 0;

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
	};
	return (
		<section className="product_photos">
			<div className="product_photos_container">
				<div
					className="carousel"
					data-carousel
				>
					<button
						type="button"
						className="btn carousel_btn prev"
						onClick={handleArrowClick}
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
						onClick={handleArrowClick}
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
					<ul data-slides>
						<li
							className="slide"
							data-active
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
				{/* <div className="photos_list"></div> */}
			</div>
		</section>
	);
};

export default ProductPhotos;
