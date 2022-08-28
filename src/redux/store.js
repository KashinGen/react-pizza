import { configureStore } from '@reduxjs/toolkit';
import filterSlice from './slice/filterSlice';
import pizzaSlice from './slice/pizzaSlice';

export const store = configureStore({
	reducer: {
		pizza: pizzaSlice,
		filter: filterSlice,
	},
});
console.log(store);
