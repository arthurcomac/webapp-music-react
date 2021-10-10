import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setState } from 'store/favorites.store';
import Table from "components/Table";

const Favorites = () => {
	const dispatch = useDispatch();

	const allFavorites = useSelector(state => state.favorites.list);

	useEffect(() => {
		dispatch(setState(true));

		return function cleanup() {
			dispatch(setState(false));
		}
	});

	const columns = [
		{
			attribute: "id",
			label: "#"
		},
		{
			attribute: "md5_image",
			label: "Album"
		},
		{
			attribute: "title",
			label: "Título"
		},
		{
			attribute: "duration",
			label: "Duração"
		}
	]

	const actions = {
    player: true,
    favorites: 'remove',
    deezer: true
  }

	return(
		<Table
			payload={allFavorites}
			columns={columns}
			actions={actions}
		/>
	);
}

export default Favorites;
