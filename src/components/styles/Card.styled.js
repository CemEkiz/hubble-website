import styled from 'styled-components';

export const StyledCard = styled.div`
	display: flex;
	gap: 40px;
	align-items: center;
	background-color: #fff;
	border-radius: 15px;
	/* box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); */
	box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
	margin: 40px;
	padding: 60px;
	flex-direction: ${({ layout }) => layout || 'row'};

	img {
		width: 80%;
		display: block;
		margin: 0 auto;
	}

	& > div {
		flex: 1;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		gap: 40px;

		h2 {
			margin-bottom: 20px;
		}
	} ;
`;
