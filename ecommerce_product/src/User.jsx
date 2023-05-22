import avatar from './images/image-avatar.png';
import cart from './images/icon-cart.svg';

const User = () => {
	return (
		<div className="user_info | flex">
			<button
				type="button"
				className="cart_btn btn"
			>
				<img
					src={cart}
					alt="cart"
				/>
				<span className="cart_counter | bold">3</span>
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
