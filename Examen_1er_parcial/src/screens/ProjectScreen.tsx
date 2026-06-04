import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ProjectScreen() {
  const proyecto = {
    nombre: 'Examen primer parcial ',
    version: '1.0.0',
    descripcion:
      'Aplicación orientada a mostrar información de un proyecto integrador basado en seguridad, sensores y monitoreo de eventos.',
    repositorio: 'github.com/ourielps14/portafolio-movil',
    activo: true,
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Examen Primer Parcial</Text>

      <View style={styles.card}>
        <Text style={styles.label}>Nombre:</Text>
        <Text style={styles.value}>{proyecto.nombre}</Text>

        <Text style={styles.label}>Versión:</Text>
        <Text style={styles.value}>{proyecto.version}</Text>

        <Text style={styles.label}>Descripción:</Text>
        <Text style={styles.value}>{proyecto.descripcion}</Text>

        <Text style={styles.label}>Repositorio:</Text>
        <Text style={styles.value}>{proyecto.repositorio}</Text>

        <Text style={styles.label}>Activo:</Text>
        <Text style={styles.value}>{proyecto.activo ? 'Sí' : 'No'}</Text>
      </View>

      <Text style={styles.subtitle}>Objeto completo con JSON.stringify()</Text>

      <View style={styles.jsonCard}>
        <Text style={styles.jsonText}>
          {JSON.stringify(proyecto, null, 2)}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F8FAFC',
    minHeight: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
    textAlign: 'center',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 15,
    elevation: 4,
    marginBottom: 25,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
    marginTop: 10,
  },
  value: {
    fontSize: 15,
    color: '#475569',
    marginTop: 4,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 10,
  },
  jsonCard: {
    backgroundColor: '#0F172A',
    padding: 18,
    borderRadius: 15,
  },
  jsonText: {
    color: '#E2E8F0',
    fontSize: 14,
  },
});