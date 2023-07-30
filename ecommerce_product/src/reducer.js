import { INCREASE, DECREASE, ADD_TO_CART, CLEAR_CART } from './actions';
// just making a comment to see if github commits are working

const reducer = (state, action) => {
	if (action.type === INCREASE) {
		const newAmount = state.amount + 1;
		return { ...state, amount: newAmount };
	}
	if (action.type === DECREASE) {
		if (state.amount <= 0) return { ...state };
		const newAmount = state.amount - 1;
		return { ...state, amount: newAmount };
	}
	if (action.type === ADD_TO_CART) {
		const newCartAmount = state.cart.amountInCart + state.amount;
		const newTotalPrice = state.product.price * newCartAmount;
		const newCart = {
			...state.cart,
			amountInCart: newCartAmount,
			totalPrice: newTotalPrice,
		};

		return { ...state, cart: newCart };
	}
	if (action.type === CLEAR_CART) {
		const newCartAmount = 0;
		const newTotalPrice = 0;
		const newCart = {
			...state.cart,
			amountInCart: newCartAmount,
			totalPrice: newTotalPrice,
		};

		return { ...state, cart: newCart };
	}

	throw new Error(`no matching action type : ${action.type}`);
};
export default reducer;
