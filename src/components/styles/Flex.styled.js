import styled from 'styled-components';

export const Flex = styled.div`
	display: flex;
	align-items: ${({ align }) => align || 'center'};
	flex-direction: ${({ dir }) => dir || 'row'};
	gap: ${({ gap }) => gap};

	& > div,
	& > ul {
		flex: 1;
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		text-align: center;
		align-items: center;
	}
`;
