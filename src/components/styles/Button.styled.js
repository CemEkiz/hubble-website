import styled from 'styled-components';

export const Button = styled.button`
	border-radius: 50px;
	border: none;
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	cursor: pointer;
	font-size: 16px;
	font-weight: 700;
	padding: 15px 60px;
	background-color: ${({ bg }) => bg || '#fff'};
	color: ${({ color }) => color || '#333'};
	transition: all 0.2s;

	&:hover {
		opacity: 0.9;
		transform: scale(0.98);
	}
`;
