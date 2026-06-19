import React from 'react';
import { View, Text, FlatList, Image, Button, Alert, StyleSheet, SafeAreaView } from 'react-native';
import { obtenerProductos } from '../services/artesaniaService';
import { Producto } from '../types';

export default function HomeScreen() {
    // Obtenemos los datos de nuestro servicio
    const productos = obtenerProductos();

    // Función que dispara la alerta de confirmación
    const confirmarOferta = (producto: Producto) => {
        Alert.alert(
            'Confirmar Oferta',
            `¿Deseas enviar una oferta por el producto: ${producto.nombre}?`,
            [
                { text: 'Cancelar', style: 'cancel' },
                {
                    text: 'Sí, confirmar',
                    onPress: () => Alert.alert('¡Éxito!', 'Tu oferta ha sido enviada al artesano.')
                },
            ]
        );
    };

    // Cómo se dibuja cada elemento de la lista
    const renderItem = ({ item }: { item: Producto }) => (
        <View style={styles.card} >
            <Image source={{ uri: item.imagen }
            } style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={styles.title}> {item.nombre} </Text>
                < Text style={styles.artisan} > Por: {item.artesano.nombre} </Text>
                < Text style={styles.price} > ${item.precio} MXN </Text>
                < Button
                    title="Hacer Oferta"
                    color="#d35400"
                    onPress={() => confirmarOferta(item)}
                />
            </View>
        </View>
    );

    return (
        <SafeAreaView style={styles.container} >
            <Text style={styles.header}> Catálogo de Artesanías </Text>
            < FlatList
                data={productos}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContainer}
            />
        </SafeAreaView>
    );
}

// Estilos básicos para que se vea bien presentado
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4f4f4',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 15,
        color: '#333',
    },
    listContainer: {
        paddingHorizontal: 15,
        paddingBottom: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        marginBottom: 15,
        overflow: 'hidden',
        elevation: 3, // Sombra en Android
        shadowColor: '#000', // Sombra en iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: 120,
        height: 120,
    },
    infoContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#2c3e50',
    },
    artisan: {
        fontSize: 14,
        color: '#7f8c8d',
        marginVertical: 4,
    },
    price: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#27ae60',
        marginBottom: 10,
    },
});