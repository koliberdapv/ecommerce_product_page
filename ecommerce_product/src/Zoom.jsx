import ProductPhotos from './ProductPhotos';
import { useGlobalContext } from './context';

const Zoom = () => {
	const { closeZoom } = useGlobalContext();
	return (
		<dialog
			className="zoom_container"
			id="zoom_container"
		>
			<button
				type="button"
				className="zoom_close_btn btn | grid"
				onClick={closeZoom}
			>
				<svg
					width="14"
					height="15"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
						fill="currentColor"
						fillRule="evenodd"
					/>
				</svg>
			</button>
			<ProductPhotos />
		</dialog>
	);
};

export default Zoom;
