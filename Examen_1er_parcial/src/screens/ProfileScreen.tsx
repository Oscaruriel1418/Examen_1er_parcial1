import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const nombre: string = 'Oscar Uriel Pérez Silva, Fernanda Daniela Perez Garcia, Osman Kenneth Ramirez Trejo';
  const carrera: string = 'Tecnologías de la Información';
  const cuatrimestre: number = 9;
  const promedio: number[] = [9.2, 8.5, 9.0];
  const titulado: boolean = false;
  const datoPendiente: null = null;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mi Perfil</Text>

      <Text style={styles.subtitle}>Imagen desde internet</Text>
      <Image
        source={{
          uri: 'https://external-preview.redd.it/a1vEkB4_4EF17adHj5YB4nK5fNKOmqiDDRnj27OVB3k.jpg?auto=webp&s=00faaf373aebfce342e8419495df8f9fcaa7b849',
        }}
        style={styles.profileImage}
      />

      <Text style={styles.subtitle}>Imagen local desde assets</Text>
      <Image
        source={require('../../assets/foto_prueba.png')}
        style={styles.profileImage}
      />

      <View style={styles.card}>
        <Text style={styles.text}>Nombres: {nombre}</Text>
        <Text style={styles.text}>Carrera: {carrera}</Text>
        <Text style={styles.text}>Cuatrimestre: {cuatrimestre}</Text>
        <Text style={styles.text}>Promedio: {promedio.join(', ')}</Text>
        <Text style={styles.text}>Titulado: {titulado ? 'Sí' : 'No'}</Text>
        <Text style={styles.text}>
          Dato pendiente: {datoPendiente === null ? 'null' : datoPendiente}
        </Text>
      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Tipos de datos usados:</Text>
        <Text style={styles.infoText}>string, number, boolean y null</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#0F172A',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 15,
    marginBottom: 8,
    color: '#334155',
  },
  profileImage: {
    width: 160,
    height: 160,
    borderRadius: 80,
    marginBottom: 10,
  },
  card: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    marginTop: 20,
    elevation: 4,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    color: '#1E293B',
  },
  infoBox: {
    width: '100%',
    backgroundColor: '#DBEAFE',
    padding: 15,
    borderRadius: 12,
    marginTop: 20,
  },
  infoText: {
    fontSize: 15,
    color: '#1E40AF',
    textAlign: 'center',
  },
});