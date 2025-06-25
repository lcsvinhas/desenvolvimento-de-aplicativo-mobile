import { StyleSheet } from 'react-native'
import { global } from '../../styles/global'

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: global.fundo,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    marginBottom: 20,
    borderRadius: 60,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: global.primaria,
  },
  paragrafo: {
    fontSize: 16,
    lineHeight: 22,
    marginBottom: 12,
    marginRight: 30,
    color: global.terciaria,
    textAlign: 'justify',
  },
  rodape: {
    marginTop: 30,
    fontSize: 14,
    color: global.secundaria,
    textAlign: 'center',
  },
  paragrafoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  icone: {
    marginRight: 8,
    marginTop: 3,
  },
  banner: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    marginTop: 30,
    borderRadius: 20
  }
})
