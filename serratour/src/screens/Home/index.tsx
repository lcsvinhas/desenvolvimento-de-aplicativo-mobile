import { Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './styles'
export default function Home() {
    return (
        <ScrollView style={styles.container}>

            <Image
                source={require('../../../assets/Casa_Santos_Dumont.jpg')}
                style={styles.banner}
                resizeMode="cover"
            />
            <Text style={styles.titulo}>🌄 Descubra o melhor de Petrópolis com o SerraTour!</Text>

            <Text style={styles.paragrafo}>
                Seja bem-vindo ao SerraTour, seu guia oficial dos pontos turísticos de Petrópolis! 🎒🏞️
            </Text>
            <Text style={styles.paragrafo}>
                Aqui você encontra os lugares mais incríveis da cidade imperial: palácios, museus, trilhas, culinária local e muito mais. Tudo isso com fotos, dicas e curiosidades que só um local saberia! 💡
            </Text>
            <Text style={styles.paragrafo}>
                Quer saber onde tirar aquela selfie com uma vista de tirar o fôlego? 🍃📸 Ou qual restaurante serve o melhor fondue da serra? A gente te mostra!
            </Text>
        </ScrollView>
    )
}
