import React from 'react';
import { Link } from "react-router-dom";

import StyledButtonDeezer from "styles/components/ButtonDeezer";
// import iconDeezer from "assets/iconDeezer.png";

import { FaDeezer } from "react-icons/fa";

const ButtonDeezer = ({ link }) => (
	<StyledButtonDeezer>
		<Link to={{ pathname: `${link}` }} target="_blank">
			{/* <img src={iconDeezer} alt="Listen on Deezer" /> */}
			<FaDeezer size={25}/>
		</Link>
	</StyledButtonDeezer>
)

export default ButtonDeezer;
