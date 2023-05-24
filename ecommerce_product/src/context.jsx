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
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
