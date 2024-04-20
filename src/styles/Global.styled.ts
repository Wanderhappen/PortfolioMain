import { createGlobalStyle } from 'styled-components'
import { theme } from './Theme'

export const GlobalStyle = createGlobalStyle`
	*,
	*::before,
	*::after {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
	body {
  margin: 0;
	min-width: 360px;
  font-family: Poppins, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	line-height: 1.2;
	
	/* overflow-x: hidden; */
}

section:first-of-type {
	@media ${theme.media.mobile} 	{
			padding: 86px 0	112px					
		}
}


section {
		padding: 100px 0;		
		@media ${theme.media.mobile} 	{
			padding: 80px 0				
		}
	}



	a {
		text-decoration: none;
	  cursor: pointer;

	}
	ul {
		list-style: none;
	}

	button {
		background-color: unset;
		border:none
	}	

	

`
