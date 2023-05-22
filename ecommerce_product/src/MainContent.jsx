import ProductInfo from './ProductInfo';
import ProductPhotos from './ProductPhotos';

const MainContent = () => {
	return (
		<main className="main_content">
			<div className="container">
				{/* <ProductPhotos /> */}
				<ProductInfo />
			</div>
		</main>
	);
};

export default MainContent;
