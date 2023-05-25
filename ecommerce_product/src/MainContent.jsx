import ProductInfo from './ProductInfo';
import ProductPhotos from './ProductPhotos';
import Zoom from './Zoom';

const MainContent = () => {
	return (
		<main className="main_content">
			<div className="main_content_container">
				<ProductPhotos />
				<ProductInfo />
			</div>
			<Zoom />
		</main>
	);
};

export default MainContent;
