import { useContext, createContext, useState, useReducer } from 'react';
import reducer from './reducer';
import { INCREASE, DECREASE, ADD_TO_CART, CLEAR_CART } from './actions';

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
	const [activeImageIndex, setActiveImageIndex] = useState(0);

	const increase = () => {
		dispatch({ type: INCREASE });
	};

	const decrease = () => {
		dispatch({ type: DECREASE });
	};

	const addToCart = () => {
		dispatch({ type: ADD_TO_CART });
	};

	const clearCart = () => {
		dispatch({ type: CLEAR_CART });
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

	const changeActivePhoto = (e) => {
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
		setActiveImageIndex(newIndex);
	};
	const changeActiveThumbnail = (e) => {
		const newIndex = parseInt(
			e.target.closest('.single_thumbnail').dataset.thumbnailIndex
		);
		const slides = document.getElementById('slides');
		const activeSlide = slides.querySelector('[data-active]');

		slides.children[newIndex].dataset.active = true;
		delete activeSlide.dataset.active;
		setActiveImageIndex(newIndex);

		// console.log(slides);
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
				activeImageIndex,
				setActiveImageIndex,
				changeActivePhoto,
				changeActiveThumbnail,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
