import avatar from './images/image-avatar.png';
import cartImage from './images/icon-cart.svg';
import { useGlobalContext } from './context';
import url from './images/image-product-1-thumbnail.jpg';
import deleteImage from './images/icon-delete.svg';

const User = () => {
	const { cart, handleCartToggle, product, clearCart } = useGlobalContext();

	return (
		<div className="user_info | flex">
			<button
				type="button"
				className="cart_btn btn"
				onClick={handleCartToggle}
			>
				<img
					src={cartImage}
					alt="cart"
				/>
				<span
					className={`${
						cart.amountInCart >= 1 ? 'cart_counter | bold' : 'hidden'
					}`}
				>
					{cart.amountInCart}
				</span>
			</button>
			<dialog className="cart_dialog">
				<div className="cart_container | grid">
					<h3 className="cart_header">Cart</h3>

					<div className="cart_content | grid">
						{cart.amountInCart === 0 && (
							<div className="centered | grid">Your cart is empty.</div>
						)}
						{cart.amountInCart !== 0 && (
							<>
								<div className="cart_product_info | grid">
									<picture className="cart_product_image">
										<img
											src={url}
											alt="product"
										/>
									</picture>
									<div className="cart_product_info_content | flex">
										<p className="cart_product_name">{product.name}</p>
										<div className="cart_product_total | flex">
											<span>${product.price.toFixed(2)}</span>x
											<span>{cart.amountInCart}</span>
											<span className="cart_total_price | bold">
												${cart.totalPrice.toFixed(2)}
											</span>
										</div>
									</div>
									<button
										type="button"
										className="cart_delete_btn btn"
										onClick={clearCart}
									>
										<img
											src={deleteImage}
											alt="delete"
										/>
									</button>
								</div>
								<button
									className="cart_checkout_btn btn | bold"
									type="button"
								>
									Checkout
								</button>
							</>
						)}
					</div>
				</div>
			</dialog>
			<a
				href="#"
				className="user_avatar"
			>
				<img
					src={avatar}
					alt="user image"
				/>
			</a>
		</div>
	);
};

export default User;
