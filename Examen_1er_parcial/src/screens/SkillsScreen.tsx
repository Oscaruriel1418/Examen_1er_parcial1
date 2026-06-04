import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SkillsScreen() {
  const habilidades: string[] = [
    'JavaScript',
    'TypeScript',
    'React Native',
    'Python',
    'Bases de Datos',
    'Git y GitHub',
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Mis Habilidades</Text>

      <Text style={styles.description}>
        Estas son algunas tecnologías y habilidades que conozco:
      </Text>

      <View style={styles.skillsContainer}>
        {habilidades.map((habilidad: string, index: number) => (
          <View key={index} style={styles.chip}>
            <Text style={styles.chipText}>{habilidad}</Text>
          </View>
        ))}
      </View>

      <View style={styles.noteCard}>
        <Text style={styles.noteText}>
          Esta pantalla usa un arreglo string[] y muestra los datos usando .map().
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
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#475569',
    textAlign: 'center',
    marginBottom: 20,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 12,
  },
  chip: {
    backgroundColor: '#2563EB',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    margin: 5,
  },
  chipText: {
    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: '600',
  },
  noteCard: {
    marginTop: 30,
    backgroundColor: '#FFFFFF',
    padding: 18,
    borderRadius: 15,
    elevation: 3,
  },
  noteText: {
    fontSize: 15,
    color: '#334155',
    textAlign: 'center',
  },
});