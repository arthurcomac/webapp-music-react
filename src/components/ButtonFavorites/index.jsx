import React from 'react';
import { useDispatch } from 'react-redux';
import {
	addFavorites,
	removeFavorites
} from 'store/favorites.store';

import StyledButtonFavorites from "styles/components/ButtonFavorites";
import { FaHeart } from "react-icons/fa";
import { FaHeartBroken } from "react-icons/fa";

const ButtonFavorites = ({ item, action }) => {

	const dispatch = useDispatch();

	const handleFavorite = (payload) =>	{
		if ( action === 'add' ) {
			dispatch(addFavorites(payload));
		}

		if ( action === 'remove' ) {
			dispatch(removeFavorites(payload));
		}
	};

	return (
		<StyledButtonFavorites onClick={() => handleFavorite(item)}>
			{ action === "add" ? <FaHeart size={25}/> : <FaHeartBroken size={25}/> }
		</StyledButtonFavorites>
	);
}

export default ButtonFavorites;
