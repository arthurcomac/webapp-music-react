import styled from "styled-components";

const StyledButtonFavorites = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	min-height: 30px;
	max-height: 31px;
	border: 1px solid #000000;
	border-radius: 5px;
	margin: 0px 2px 0px 2px;

	background-color: Transparent;
	background-repeat: no-repeat;
	overflow: hidden;

	&:hover {
		cursor: pointer;
	}
`;

export default StyledButtonFavorites;
