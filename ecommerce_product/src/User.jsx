import avatar from './images/image-avatar.png';
import cartImage from './images/icon-cart.svg';
import { useGlobalContext } from './context';

const User = () => {
	const { cart } = useGlobalContext();
	return (
		<div className="user_info | flex">
			<button
				type="button"
				className="cart_btn btn"
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
