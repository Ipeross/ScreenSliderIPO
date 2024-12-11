import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Configuración</Text>
      
      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Ajustes de Notificaciones</Text>
        <Button title="Activar" onPress={() => alert('Notificaciones activadas')} />
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Idioma</Text>
        <Button title="Cambiar" onPress={() => alert('Idioma cambiado')} />
      </View>

      <View style={styles.optionContainer}>
        <Text style={styles.optionText}>Tema</Text>
        <Button title="Oscuro" onPress={() => alert('Tema oscuro activado')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1c1c1c',
    padding: 20,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 30,
    textAlign: 'center',
  },
  optionContainer: {
    marginBottom: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
  },
  optionText: {
    fontSize: 18,
    color: '#fff',
    marginBottom: 10,
  },
});