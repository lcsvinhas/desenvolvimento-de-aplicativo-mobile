import { StyleSheet } from 'react-native'
import { global } from '../../styles/global'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: global.fundo,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'left',
    paddingLeft: 20,
    paddingRight: 20,
    color: global.primaria,
  },
  banner: {
    width: '100%',
    height: 300,
    marginBottom: 20
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    paddingLeft: 20,
    paddingRight: 20,
    color: global.texto,
  },
  botao: {
    backgroundColor: global.primaria,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 5,
    marginLeft: 20,
    marginRight: 20
  },
  botaoSecundario: {
    backgroundColor: global.secundaria,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 20,
    marginRight: 20
  },
  textoBotao: {
    color: global.fundo,
    fontSize: 16,
    fontWeight: 'bold',
  }
})
