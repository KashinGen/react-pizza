import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
	isError: false,
	isSuccess: false,
	pizzas: [],
};

export const pizzaSlice = createSlice({
	name: 'pizza',
	initialState,
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		pizzasLoaded: (state, action) => {
			state.pizzas = action.payload;
			state.isLoading = false;
			state.isSuccess = true;
		},
		loadingError: (state) => {
			state.isError = true;
		},
	},
});
export const { startLoading, loadingError, pizzasLoaded } = pizzaSlice.actions;

export default pizzaSlice.reducer;
