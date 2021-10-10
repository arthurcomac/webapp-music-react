import styled from 'styled-components';
import { shade } from 'polished';

export const StyledSidebar = styled.div`
	height: 100%;
	width: 250px;
	position: fixed;
	z-index: 1;
	top: 0;
	left: 0;
	background: black;
	overflow-x: hidden;
	padding-top: 20px;

	color: #ffffff;

	ul li {
		margin-top: 10px;
	}
`;

export const Brand = styled.div`
	display: flex;
	justify-content: center;
	margin: 10px 0px 10px 0px;
`;

export const StyleSearch = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 20px;
`;

export const Button = styled.div`
	display: table;
	width: 100%;
	height: 25px;
	line-height: 25px;

  	margin: 20px 0px 0px 15px;

	a {
		display: flex;
		text-decoration: none;
		color: #f1f1f1;

		&:hover {
			color: ${shade(0.3, '#ffffff')}
		}
	}

	span {
		display: inline-block:
		vertical-align: middle;
		margin-left: 15px;
	}
`;