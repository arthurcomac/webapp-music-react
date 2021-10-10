import React from "react";
import {
	StyledSidebar,
	Brand,
	StyleSearch,
	Button
} from "styles/components/Sidebar";
import { Link } from "react-router-dom";
import Search from "components/Search";

import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Sidebar = () => {
	return(
		<StyledSidebar>
			<Brand>
			</Brand>
			<StyleSearch>
				<Search />
			</StyleSearch>
			<Button>
				<Link to="/">
					<FaHome size={25}/>
					<span>Início</span>
				</Link>
			</Button>
			<Button>
				<Link to="/favorites">
					<FaHeart size={25}/>
					<span>Favoritos</span>
				</Link>
			</Button>
		</StyledSidebar>
	);
}

export default Sidebar;
