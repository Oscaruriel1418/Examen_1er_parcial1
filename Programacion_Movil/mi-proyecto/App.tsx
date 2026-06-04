import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';

// ── Variables con distintos tipos de datos ──
const nombre: string = 'Oscar Uriel';
const carrera: string = 'Ing. en Sistemas Computacionales';
const cuatrimestre: number = 9;
const promedio: number = 8.5;
const titulado: boolean = false;

type Screen = 'Home' | 'Perfil' | 'Imagen';

export default function App() {
  const [screen, setScreen] = useState<Screen>('Home');
  const [imageUrl, setImageUrl] = useState<string>('https://sl.bing.net/ilvi63A4mv6');

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('Home')}>
          <Text style={styles.menuText}>Inicio</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('Perfil')}>
          <Text style={styles.menuText}>Perfil</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuButton} onPress={() => setScreen('Imagen')}>
          <Text style={styles.menuText}>Imagen URL</Text>
        </TouchableOpacity>
      </View>

      {screen === 'Home' && (
        <View style={styles.content}>
          <Image source={{ uri: imageUrl }} style={styles.avatar} />
          <Text style={styles.titulo}>{nombre}</Text>
          <Text style={styles.subtitulo}>{carrera}</Text>
          <Text style={styles.dato}>Cuatrimestre: {cuatrimestre}</Text>
          <Text style={styles.dato}>Promedio: {promedio}</Text>
          <Text style={styles.dato}>Titulado: {String(titulado)}</Text>
          <Text style={styles.note}>Usa el menú para ir a tu perfil o cargar otra imagen desde URL.</Text>
        </View>
      )}

      {screen === 'Perfil' && (
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Mi Perfil</Text>
          <Text style={styles.label}>Nombre:</Text>
          <Text style={styles.value}>{nombre}</Text>
          <Text style={styles.label}>Carrera:</Text>
          <Text style={styles.value}>{carrera}</Text>
          <Text style={styles.label}>Cuatrimestre:</Text>
          <Text style={styles.value}>{cuatrimestre}</Text>
          <Text style={styles.label}>Promedio:</Text>
          <Text style={styles.value}>{promedio}</Text>
          <Text style={styles.label}>Titulado:</Text>
          <Text style={styles.value}>{titulado ? 'Sí' : 'No'}</Text>
        </View>
      )}

      {screen === 'Imagen' && (
        <View style={styles.content}>
          <Text style={styles.sectionTitle}>Imagen por URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={setImageUrl}
            placeholder="https://external-preview.redd.it/a1vEkB4_4EF17adHj5YB4nK5fNKOmqiDDRnj27OVB3k.jpg?auto=webp&s=00faaf373aebfce342e8419495df8f9fcaa7b849"
            autoCapitalize="none"
            autoCorrect={false}
          />
          <Image source={{ uri: imageUrl }} style={styles.imagePreview} />
          <Button title="Usar esta URL" onPress={() => setScreen('Home')} />
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  menuButton: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#007aff',
  },
  menuText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    marginBottom: 16,
  },
  imagePreview: {
    width: 260,
    height: 260,
    borderRadius: 16,
    marginTop: 16,
    marginBottom: 16,
    backgroundColor: '#f8f8f8',
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitulo: {
    fontSize: 14,
    color: '#666',
    marginBottom: 16,
  },
  dato: {
    fontSize: 16,
    marginBottom: 6,
  },
  note: {
    marginTop: 16,
    fontSize: 14,
    color: '#444',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    color: '#333',
    marginTop: 8,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  input: {
    width: '100%',
    height: 46,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
  },
});
