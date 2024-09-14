import { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, StatusBar } from 'react-native';
import { fortunes } from './fortunes';


export default function App() {

  const [mensagemSelecionada, setMensagemSelecionada] = useState('')

  function abrirBiscoito(){
    console.log("ABRINDO BISCOITO")

    const numeroAleatorio = Math.floor(Math.random() * 16)
    // mensagem = fortunes[numeroAleatorio]
    setMensagemSelecionada(fortunes[numeroAleatorio])
  }


  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar />

      <Text>Abrir biscoito da sorte</Text>

      <TouchableOpacity style={styles.openButton} onPress={abrirBiscoito}>
          <Text>Abrir</Text>
      </TouchableOpacity>

     <Text> {mensagemSelecionada}</Text>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  openButton: {
    width: 150,
    backgroundColor: '#f0ca08',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginVertical: 20
  }
});