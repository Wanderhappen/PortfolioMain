import './App.css'
import { GoTopBtn } from './components/goTopBtn/GoTopBtn'
import { Footer } from './layout/footer/Footer'
import { Header } from './layout/header/Header'
import { Contact } from './layout/sections/contacts/Contact'
import { Main } from './layout/sections/main/Main'
import { Projects } from './layout/sections/projects/Projects'
import { Technologies } from './layout/sections/Technologies/Technologies'
import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { lightTheme, darkTheme } from './styles/Theme'

function App() {
	const [theme, setTheme] = useState(darkTheme)

	const toggleTheme = () => {
		setTheme(prevTheme => (prevTheme === darkTheme ? lightTheme : darkTheme))
	}

	return (
		<ThemeProvider theme={theme}>
			<div className='App'>
				<Header toggleTheme={toggleTheme} />
				<Main />
				<Technologies />
				<Projects />
				<Contact />
				<Footer />
				<GoTopBtn />
			</div>
		</ThemeProvider>
	)
}

export default App
