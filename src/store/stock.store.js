import { createSlice } from '@reduxjs/toolkit';
import api from "services/api";

import defaultData from "helpers/datafake/defaultData";
import defaultDataSearch from "helpers/datafake/defaultDataSearch";

const stock = createSlice({
  name: "stock",
	initialState: {
		active: false,
		list: []
	},
	reducers: {
		listAll: (state, { payload }) => {
			state.list = payload;
			return state;
		},
		setState: (state, { payload }) => {
			state.active = payload;
			return state;
		}
	}
})

export const asyncListAll = () => {
	return async (dispatch) => {
		const result = await api.get("/album/302127");

		const resultDefault = defaultData;

		dispatch(listAll(resultDefault.tracks.data));
	}
}

export const asyncSearchListAll = (payload) => {
	return async (dispatch) => {
		// const result = await api.get(`/search?q=${payload}`);

		const resultDefaultSearch = defaultDataSearch;

		dispatch(listAll(resultDefaultSearch.tracks.data));
	}
}

export const {
	listAll,
	setState
} = stock.actions;

export default stock.reducer;
