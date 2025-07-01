import { View, Text } from 'react-native'
import { Container, Title } from './src/screens/Home/styles'
import { ThemeProvider } from 'styled-components'
import Home from './src/screens/Home'

export default function App() {
    const cores = {
        bg: "yellow",
        color: "#121212",
        tamanho: 54
    }

    return (
        <ThemeProvider theme={cores}>
            <Home />
        </ThemeProvider>

    )
}