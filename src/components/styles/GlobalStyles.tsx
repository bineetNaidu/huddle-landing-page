import { createGlobalStyle } from 'styled-components';

// background-color: ${({ theme }) => theme!.colors!.body || 'white'} ;
export const GlobalStyles = createGlobalStyle`
	@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');

	* {
		box-sizing: border-box;
	}

	body {
		background-color: 'white' ;
		color: hsl(192, 100%, 9%);
		font-family: 'Poppins', sans-serif;
		font-size: 1.15rem;
		margin: 0;
	}
	p {
		opacity: 0.6;
		line-height: 1.5;
	}

	img {
		max-width: 100%;
	}
`;
