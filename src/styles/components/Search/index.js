import styled from "styled-components";
import { shade } from 'polished';

export const StyledInput = styled.div`
  background: #e5e5e5;
	border-radius: 90px;
	border: 2px solid #232129;
	padding: 10px;
	width: 90%;
	color: #F4EDE8;
	margin: 20px 0px 25px 0px;

	display: flex;
	align-items: center;

	& + div {
		margin-top: 8px;
	}

	&:hover {
		background: ${shade(0.2, '#e5e5e5')}
	}
`;

export const Input = styled.input`
	flex: 1;
	background: transparent;
	border: 0;
	font-size: 1rem;

	width: 80%;

	&::placeholder {
		color: #666360;
	}

	&&:focus {
		box-shadow: 0 0 0 0;
		outline: 0;
	}
`;

