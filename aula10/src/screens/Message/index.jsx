import { View, Text } from 'react-native'
import { styles } from './styles'
import { MaterialIcons } from '@expo/vector-icons'
import Animated, { BounceIn, FadeIn, StretchOutY } from 'react-native-reanimated'

export default function Message() {
    return (
        <Animated.View style={styles.container} entering={BounceIn.delay(200)} exiting={StretchOutY}>
            <MaterialIcons name='notifications' color={'red'} size={18} />
            <Text style={styles.title}>Teste de mensagem</Text>
        </Animated.View>
    )
}