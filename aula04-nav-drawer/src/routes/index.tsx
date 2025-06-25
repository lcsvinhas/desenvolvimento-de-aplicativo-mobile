import { createDrawerNavigator, DrawerContent } from '@react-navigation/drawer'
import Home from '../screens/Home'
import Sobre from '../screens/Sobre'
import Contato from '../screens/Contato'
import CustomDrawer from '../components/CustomDrawer'

const Drawer = createDrawerNavigator()

export default function AppRouter() {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawer}
            screenOptions={{
                drawerStyle: {
                    backgroundColor: "#a1e4de",
                    width: 300
                },
                drawerActiveBackgroundColor: "blue",
                drawerInactiveTintColor: "black",
                drawerActiveTintColor: "white"
            }}>
            <Drawer.Screen name='Home' component={Home} options={{ title: "Início" }} />
            <Drawer.Screen name='Sobre' component={Sobre} />
            <Drawer.Screen name='Contato' component={Contato} />
        </Drawer.Navigator>
    )
}