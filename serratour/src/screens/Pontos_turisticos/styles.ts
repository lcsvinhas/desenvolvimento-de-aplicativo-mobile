import { StyleSheet } from 'react-native'
import { global } from '../../styles/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.fundo,
    padding: 20,
  },
  card: {
    alignItems: 'center',
    backgroundColor: global.gaveta,
    borderRadius: 12,
    marginBottom: 20,
    padding: 12,
    elevation: 2,
  },
  imagem: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: global.primaria,
  },
  localidade: {
    fontSize: 16,
    textAlign: 'center',
    color: global.terciaria,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: global.fundo,
    borderRadius: 12,
    padding: 20,
    width: '85%',
    elevation: 5,
  },
  modalTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: global.primaria,
  },
  modalTexto: {
    fontSize: 16,
    color: global.terciaria,
    marginBottom: 20,
    textAlign: 'justify',
  },
  modalBotao: {
    backgroundColor: global.primaria,
    paddingVertical: 10,
    borderRadius: 8,
  },
  modalBotaoTexto: {
    color: global.fundo,
    textAlign: 'center',
    fontWeight: 'bold',
  }
})
