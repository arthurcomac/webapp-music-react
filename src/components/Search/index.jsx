import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import {
	asyncSearchListAll,
	asyncListAll
} from "store/stock.store";

import  { debounce } from 'lodash';

import {
	Input,
	StyledInput
} from "styles/components/Search";

const Search = () => {
	const dispatch = useDispatch();

	const handleSearch = (event) => {
		const isValue = event.target.value.length;

		if (isValue) {
			const data = event.target.value;

			dispatch(asyncSearchListAll(data));
		}

		if (!isValue) {
			dispatch(asyncListAll());
		}
	};

	const debounceHandleSearch = useCallback( debounce( handleSearch, 1500), []);

	return(
		<StyledInput>
			<Input
				onChange={ debounceHandleSearch }
				type="text"
				placeholder="Pesquisar"
			/>
		</StyledInput>
	)
}

export default Search;
