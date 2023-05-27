import { useContext, createContext, useState, useReducer } from 'react';
import reducer from './reducer';
import { INCREASE, DECREASE, ADD_TO_CART, CLEAR_CART } from './actions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppContext = createContext();

const initialState = {
	product: {
		fullPrice: 250.0,
		discount: 50,
		price: 125.0,
		name: 'Fall Limited Edition Sneakers',
	},
	amount: 0,
	cart: {
		amountInCart: 0,
		totalPrice: 0,
	},
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [isZoomOpen, setIsZoomOpen] = useState(false);

	const increase = () => {
		dispatch({ type: INCREASE });
	};

	const decrease = () => {
		dispatch({ type: DECREASE });
	};

	const addToCart = () => {
		dispatch({ type: ADD_TO_CART });
		if (state.amount === 0) {
			toast.error('Please chose the amount', {
				position: toast.POSITION.TOP_CENTER,
			});
			return;
		}
		toast.success(
			`${state.amount > 1 ? 'Items have' : 'Item has'} been added to the cart`,
			{
				position: toast.POSITION.TOP_CENTER,
			}
		);
	};

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
		toast.success(
			`${
				state.cart.amountInCart > 1 ? 'Items have' : 'Item has'
			} been removed from the cart`,
			{
				position: toast.POSITION.TOP_CENTER,
			}
		);
	};

	const handleCartToggle = () => {
		const cartContainer = document.querySelector('.cart_dialog');
		if (isCartOpen) {
			cartContainer.close();
			setIsCartOpen(false);
			return;
		}
		if (!isCartOpen) {
			cartContainer.show();
			setIsCartOpen(true);
			return;
		}
	};

	const handleSlideChange = (e) => {
		let newIndex;
		let slides;
		let thumbnails_list;
		let activeSlide;
		let activeThumbnail;

		const input = e.target.closest('[data-change]');
		const isThumbnail = input.classList.contains('single_thumbnail');
		const isArrowBtn = input.classList.contains('carousel_btn');

		if (isThumbnail) {
			thumbnails_list = input.closest('.thumbnails_list');
		}

		if (isArrowBtn) {
			thumbnails_list = input
				.closest('.product_photos_container')
				.querySelector('.thumbnails_list');
		}

		activeThumbnail = thumbnails_list.querySelector('[data-thumbnail-active]');

		if (isArrowBtn) {
			slides = input.closest('[data-carousel]').querySelector('[data-slides]');

			const offset = input.classList.contains('next') ? 1 : -1;
			activeSlide = slides.querySelector('[data-active]');
			newIndex = [...slides.children].indexOf(activeSlide) + offset;

			if (newIndex < 0) newIndex = slides.children.length - 1;
			if (newIndex >= slides.children.length) newIndex = 0;
		}

		if (isThumbnail) {
			slides = input
				.closest('.product_photos_container')
				.querySelector('[data-slides]');
			activeSlide = slides.querySelector('[data-active]');

			const activeImageIndex = parseInt(activeThumbnail.dataset.thumbnailIndex);

			newIndex = parseInt(input.dataset.thumbnailIndex);
			if (newIndex === activeImageIndex) return;
		}

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;

		thumbnails_list.children[newIndex].dataset.thumbnailActive = true;
		delete activeThumbnail.dataset.thumbnailActive;
	};

	const closeZoom = () => {
		const zoomContainer = document.getElementById('zoom_container');
		zoomContainer.close();
		setIsZoomOpen(false);
	};

	return (
		<AppContext.Provider
			value={{
				...state,
				increase,
				decrease,
				addToCart,
				isCartOpen,
				setIsCartOpen,
				handleCartToggle,
				clearCart,
				isZoomOpen,
				setIsZoomOpen,
				closeZoom,
				handleSlideChange,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
