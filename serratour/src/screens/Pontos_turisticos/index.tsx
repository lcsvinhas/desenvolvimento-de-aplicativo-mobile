import React, { useState } from 'react'
import { View, Text, Image, FlatList, Modal, Pressable } from 'react-native'
import { styles } from './styles'
import { SafeAreaView } from 'react-native-safe-area-context'

const pontos_turisticos = [
    {
        nome: "Catedral São Pedro de Alcântara",
        localidade: "Centro",
        imagem: require("../../../assets/catedral-petropolis-rj.jpg"),
        descricao: "A Catedral é um dos marcos históricos mais importantes de Petrópolis, com arquitetura neogótica e túmulo de Dom Pedro II."
    },
    {
        nome: "Palácio de Cristal",
        localidade: "Centro",
        imagem: require("../../../assets/palacio-cristal.jpg"),
        descricao: "Inspirado nos jardins franceses, o Palácio de Cristal abriga eventos culturais e exposições. Uma verdadeira joia arquitetônica!"
    },
    {
        nome: "Palácio Quitandinha",
        localidade: "Quitandinha",
        imagem: require("../../../assets/palacio-quitandinha.jpg"),
        descricao: "Antigo cassino luxuoso, hoje é um espaço cultural com visitação, exposições e um lago maravilhoso na entrada."
    },
    {
        nome: "Casa Santos Dumont",
        localidade: "Quitandinha",
        imagem: require("../../../assets/Casa_Santos_Dumont.jpg"),
        descricao: "Residência de verão do pai da aviação, cheia de curiosidades, como escadas em zigue-zague e objetos criados por ele mesmo."
    }
]

export default function Pontos_turisticos() {
    const [modalVisible, setModalVisible] = useState(false)
    const [pontoSelecionado, setPontoSelecionado] = useState<any>(null)

    function abrirModal(ponto: unknown) {
        setPontoSelecionado(ponto)
        setModalVisible(true)
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={pontos_turisticos}
                keyExtractor={(item) => item.nome}
                renderItem={({ item }) => (
                    <Pressable onPress={() => abrirModal(item)} style={styles.card}>
                        <Image source={item.imagem} style={styles.imagem} />
                        <Text style={styles.nome}>{item.nome}</Text>
                        <Text style={styles.localidade}>{item.localidade}</Text>
                    </Pressable>
                )}
            />

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={styles.modalContainer}>
                        <Text style={styles.modalTitulo}>{pontoSelecionado?.nome}</Text>
                        <Text style={styles.modalTexto}>{pontoSelecionado?.descricao}</Text>
                        <Pressable
                            onPress={() => setModalVisible(false)}
                            style={styles.modalBotao}
                        >
                            <Text style={styles.modalBotaoTexto}>Fechar</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    )
}
