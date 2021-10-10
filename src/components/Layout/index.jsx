import React from "react";
import Sidebar from "components/Sidebar";
import {
	StyledLayout,
	Content,
	ContentSpacing,
	Main,
	Card,
	InformationPage
} from "styles/components/Layout";

import { useSelector } from 'react-redux';

import { FaHome } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

const Layout = ({children}) => {
	const home = useSelector( state => state.stock.active);
	const favorites = useSelector( state => state.favorites.active);

	return(
		<StyledLayout>
			<Sidebar/>
			<Content>
				<ContentSpacing>
					<Card>
						{ home ? <FaHome size={90}/> : null }
						{ favorites? <FaHeart size={90}/> : null }
					</Card>
					<InformationPage>
						{ home ? <strong>Músicas mais tocadas</strong> : null }
						{ favorites? <strong>Músicas favoritas</strong> : null }
					</InformationPage>
				</ContentSpacing>
				<Main>
					{children}
				</Main>
			</Content>
		</StyledLayout>
	);
}

export default Layout;
