import { createGlobalStyle, css } from 'styled-components';

const globalCss = css`
	body {
		margin: 0;
		padding: 0;
		min-height: var(--height);
	}

	input[type='number']::-webkit-inner-spin-button,
	input[type='number']::-webkit-outer-spin-button {
		-webkit-appearance: none !important;
		margin: 0 !important;
	}

	* {
		font-family: var(--ff-poppins) !important;
		scroll-behavior: smooth;
	}

	*::-webkit-scrollbar {
		display: none;
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
`;

export const GlobalStyles = createGlobalStyle`
    ${globalCss}
`;
