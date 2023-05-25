import { useEffect, useRef } from 'react';
import { useGlobalContext } from './context';
import product_img_1_thumb from './images/image-product-1-thumbnail.jpg';
import product_img_2_thumb from './images/image-product-2-thumbnail.jpg';
import product_img_3_thumb from './images/image-product-3-thumbnail.jpg';
import product_img_4_thumb from './images/image-product-4-thumbnail.jpg';

const ThumbnailsList = () => {
	const thumbnailsContainer = useRef(null);

	const {
		activeImageIndex,
		setActiveImageIndex,
		changeActivePhoto,
		changeActiveThumbnail,
	} = useGlobalContext();

	useEffect(() => {
		const th_list =
			thumbnailsContainer.current.querySelector('.thumbnails_list');
		const activeSlide = th_list.querySelector('[data-thumbnail-active]');

		delete activeSlide.dataset.thumbnailActive;
		th_list.children[activeImageIndex].dataset.thumbnailActive = true;
	}, [activeImageIndex]);

	return (
		<article className="thumbnails">
			<div
				className="thumbnails_container"
				ref={thumbnailsContainer}
			>
				<ul className="thumbnails_list | flex">
					<li
						className="single_thumbnail"
						data-thumbnail-active
						data-thumbnail-index="0"
						onClick={changeActiveThumbnail}
					>
						<img
							src={product_img_1_thumb}
							alt="product picture"
						/>
					</li>

					<li
						className="single_thumbnail"
						data-thumbnail-index="1"
						onClick={changeActiveThumbnail}
					>
						<img
							src={product_img_2_thumb}
							alt="product picture"
						/>
					</li>
					<li
						className="single_thumbnail"
						data-thumbnail-index="2"
						onClick={changeActiveThumbnail}
					>
						<img
							src={product_img_3_thumb}
							alt="product picture"
						/>
					</li>
					<li
						className="single_thumbnail"
						data-thumbnail-index="3"
						onClick={changeActiveThumbnail}
					>
						<img
							src={product_img_4_thumb}
							alt="product picture"
						/>
					</li>
				</ul>
			</div>
		</article>
	);
};

export default ThumbnailsList;
