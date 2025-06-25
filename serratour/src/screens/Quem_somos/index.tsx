import { ScrollView, Text, View, Image } from 'react-native'
import { styles } from './styles'
import { global } from '../../styles/global'
import { Feather } from '@expo/vector-icons'

export default function Quem_somos() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image
                source={require('../../../assets/grupo.jpeg')}
                style={styles.banner}
                resizeMode="cover"
            />

            <Text style={styles.titulo}>
                <Feather name="info" size={24} color={global.primaria} /> Sobre o SerraTour
            </Text>

            <View style={styles.paragrafoContainer}>
                <Feather name="map" size={20} color={global.terciaria} style={styles.icone} />
                <Text style={styles.paragrafo}>
                    O SerraTour nasceu da paixão por Petrópolis, sua história, cultura e belezas naturais. Nosso objetivo é facilitar a vida de quem deseja explorar a cidade de forma inteligente, acessível e divertida. 🌄
                </Text>
            </View>

            <View style={styles.paragrafoContainer}>
                <Feather name="users" size={20} color={global.terciaria} style={styles.icone} />
                <Text style={styles.paragrafo}>
                    Somos um grupo de estudantes/colaboradores que acredita no poder da tecnologia para promover o turismo local e valorizar tudo o que a Serra tem de melhor a oferecer.
                </Text>
            </View>

            <View style={styles.paragrafoContainer}>
                <Feather name="smartphone" size={20} color={global.terciaria} style={styles.icone} />
                <Text style={styles.paragrafo}>
                    O aplicativo foi desenvolvido com React Native como projeto final da disciplina de Desenvolvimento de Aplicações Móveis, e segue crescendo com o apoio da comunidade e feedback dos usuários. 💻📲
                </Text>
            </View>

            <View style={styles.paragrafoContainer}>
                <Feather name="star" size={20} color={global.terciaria} style={styles.icone} />
                <Text style={styles.paragrafo}>
                    Esperamos que o SerraTour seja mais do que um guia: que ele te ajude a criar memórias inesquecíveis pela cidade imperial. ✨
                </Text>
            </View>

            <Text style={styles.rodape}>Equipe SerraTour © 2025</Text>
        </ScrollView>
    )
}
