import PurchaseOptions from './PurchaseOptions';
import { useGlobalContext } from './context';
import { memo } from 'react';

const ProductInfo = () => {
	const { product } = useGlobalContext();
	return (
		<section className="product_info">
			<div className="container">
				<div className="product_info_container | grid">
					<h2 className="company_title | bold">sneaker company</h2>
					<h1 className="product_title | bold">{product.name}</h1>
					<p className="product_description">
						These low-profile sneakers are your perfect casual wear companion.
						Featuring a durable rubber outer sole, they'll withstand everything
						the weather can offer.
					</p>
					<div className="product_price_container | flex">
						<div className="space_out | flex">
							<span className="price | bold">${product.price.toFixed(2)}</span>
							<span className="discount | bold">{product.discount}%</span>
						</div>
						<span className="full_price | bold">
							${product.fullPrice.toFixed(2)}
						</span>
					</div>
					<PurchaseOptions />
				</div>
			</div>
		</section>
	);
};

export default memo(ProductInfo);
