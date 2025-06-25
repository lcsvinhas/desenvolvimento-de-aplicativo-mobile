import { StyleSheet } from 'react-native'
import { global } from '../../styles/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: global.fundo,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: global.primaria,
  },
  input: {
    height: 50,
    borderColor: global.secundaria,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 16,
    fontSize: 16,
    backgroundColor: global.gaveta,
    color: global.texto,
  },
  botao: {
    backgroundColor: global.primaria,
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  botaoTexto: {
    color: global.fundo,
    fontSize: 16,
    fontWeight: 'bold',
  },
})
