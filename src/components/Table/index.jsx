import React from "react";

import Player from "components/Player";
import ButtonDeezer from "components/ButtonDeezer";
import ButtonFavorites from "components/ButtonFavorites";

import {
	StyledTable,
	Thead,
	Th,
	Tr,
	Tbody,
	Td,
	Badgets
} from 'styles/components/Table';

const Table = ({ payload, columns, actions }) => {

	const head = columns.map(head => <Th key={ head.attribute }>{ head.label }</Th>);

	if (actions) {
		head.push(<Th key="Actions"></Th>);
	}

	const rows = payload.map(item => {

		const cel = columns.map(data => <Td key={item[data.attribute]}>{item[data.attribute]}</Td>);

		if (actions) {
			cel.push(
				<Td key={ `Player${item.id}` }>
					<Badgets>
						{ actions.player ? <Player	payload={ item.preview } /> : null }
						{ actions.favorites ? <ButtonFavorites item={ item } action={ actions.favorites }/> : null }
						{ actions.deezer ? <ButtonDeezer link={ item.link } /> : null }
					</Badgets>
				</Td>
			);
		}

		return <Tr key={item.id}>{cel}</Tr>;
	});

	return(
		<StyledTable>
			<Thead>
				{/* <div> */}
					<Tr>
						{head}
						{/* { columns.map(head => <Th key={head.attribute}>{head.label}</Th>) }
						{ actions ? <Th key="Actions">Ações</Th> : null } */}
					</Tr>
				{/* </div> */}
			</Thead>
			<Tbody>
				{rows}
				{/* { payload.map(item => 
						<Tr key={item.id}>
							{	columns.map(data => <Td key={item[data.attribute]}>{item[data.attribute]}</Td>)}
							{ actions.player ? <Player	payload={item.preview} /> : null}
							{ actions.favorites ? <button onClick={() => handleFavorite(item)}>{actions.favorites === "add" ? "Adicionar" : " Remover"}</button> : null }
							{ actions.deezer ? <div><Link to={{ pathname: `${item.link}` }} target="_blank">Deezer</Link></div> : null }
						</Tr>
					)
				} */}
			</Tbody>
		</StyledTable>
	);
}

export default Table;
