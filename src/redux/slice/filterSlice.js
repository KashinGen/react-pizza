import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	categoryId: {
		label: 'Все',
		value: 'all',
	},
	sort: {
		label: 'популярности',
		value: 'rating',
	},
};

export const filterSlice = createSlice({
	name: 'filter',
	initialState,
	reducers: {
		changeSort: (state, action) => {
			console.log('sort change', action);
			// Redux Toolkit allows us to write "mutating" logic in reducers. It
			// doesn't actually mutate the state because it uses the Immer library,
			// which detects changes to a "draft state" and produces a brand new
			// immutable state based off those changes
			state.sort = action.payload;
		},
		changeCategory: (state, action) => {
			console.log('category change', action);
			state.categoryId = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeCategory, changeSort } = filterSlice.actions;

console.log(filterSlice);

export default filterSlice.reducer;
