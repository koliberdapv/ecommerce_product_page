import { useContext, createContext, useState, useReducer } from 'react';
import reducer from './reducer';
import { INCREASE, DECREASE, ADD_TO_CART } from './actions';

const AppContext = createContext();

const initialState = {
	product: {
		fullPrice: 250.0,
		discount: 50,
		price: 125.0,
	},
	amount: 0,
	cart: {
		amountInCart: 0,
		totalPrice: 0,
	},
};

export const AppProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const increase = () => {
		dispatch({ type: INCREASE });
	};

	const decrease = () => {
		dispatch({ type: DECREASE });
	};

	const addToCart = () => {
		dispatch({ type: ADD_TO_CART });
	};

	return (
		<AppContext.Provider value={{ ...state, increase, decrease, addToCart }}>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};
