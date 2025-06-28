import { FlatList, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { db } from './src/firebaseConnection'
import { useEffect, useState } from 'react';
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, setDoc } from 'firebase/firestore';
import UsuariosList from './src/components/UsuariosList';

interface Usuario {
  id: string,
  nome: string,
  email: string,
  cargo: string
}

export default function App() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [cargo, setCargo] = useState("")
  const [usuarios, setUsuarios] = useState<Usuario[]>([])

  useEffect(() => {
    function getDados() {
      // const docref = doc(db, "usuarios", "1")
      const usersRef = collection(db, "usuarios")
      onSnapshot(usersRef, (snapshot) => {
        let lista: Usuario[] = []
        snapshot.forEach((doc) => {
          lista.push({
            id: doc.id,
            nome: doc.data().nome,
            email: doc.data().email,
            cargo: doc.data().cargo
          })
        })
        setUsuarios(lista)
      })

      // getDoc(docref)
      //   .then((snapshot) => {
      //     setNome(snapshot.data()?.nome)
      //   }).catch((error) => {
      //     console.error(error)
      //   })

      // onSnapshot(doc(db, "usuarios", "1"), (doc) => {
      //   setNome(doc.data()?.nome)
      //   setEmail(doc.data()?.email)
      //   setCargo(doc.data()?.cargo)
      // })
    }
    getDados()
  }, [])

  async function handleRegister() {
    await addDoc(collection(db, "usuarios"), {
      nome,
      email,
      cargo
    }).then(() => {
      console.log("Cadastrado com sucesso!");
      setNome("")
      setEmail("")
      setCargo("")
    }).catch((error) => {
      console.error(error);
    })
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />

      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={nome} onChangeText={(texto) => setNome(texto)} />

      <Text style={styles.label}>Email:</Text>
      <TextInput style={styles.input} value={email} onChangeText={(texto) => setEmail(texto)} />

      <Text style={styles.label}>Cargo:</Text>
      <TextInput style={styles.input} value={cargo} onChangeText={(texto) => setCargo(texto)} />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      <FlatList
        data={usuarios}
        renderItem={({ item }) => <UsuariosList data={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
  },
  button: {
    backgroundColor: "#000",
    marginLeft: 8,
    marginRight: 8,
  },
  buttonText: {
    padding: 8,
    color: "#FFF",
    textAlign: "center",
  },
  label: {
    color: "#000",
    fontSize: 18,
    marginBottom: 4,
    marginLeft: 8,
  },
  labelUsuarios: {
    marginTop: 14,
    marginLeft: 8,
    fontSize: 20,
    color: "#000",
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    marginLeft: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  list: {
    marginTop: 8,
    marginLeft: 8,
    marginRight: 8,
  },
});
