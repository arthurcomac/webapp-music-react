import { createSlice } from '@reduxjs/toolkit';

const favorites = createSlice({
  name: "favorites",
	initialState: {
		active: false,
		list: []
	},
	reducers: {
		addFavorites: (state, { payload }) => {
			// const existFavorite = state.find(item => item.id = payload.id);
			
			// if (existFavorite) {
			// 	return state;
			// }

			state.list.push(payload);
			return state;
		},
		removeFavorites: (state, { payload }) => {
			const elementIndex = state.list.findIndex(elem => elem.id === payload.id);
			state.list.splice(elementIndex, 1);
			return state;
		},
		setState: (state, { payload }) => {
			state.active = payload;
			return state;
		},
	}
})

export const {
	addFavorites,
	removeFavorites,
	setState
} = favorites.actions;

export default favorites.reducer;
