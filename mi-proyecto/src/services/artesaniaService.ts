import { Artesano, Producto } from '../types';

// 3 Artesanos de prueba
const artesanos: Artesano[] = [
  { id: 'a1', nombre: 'María López', especialidad: 'Textiles', ubicacion: 'Oaxaca' },
  { id: 'a2', nombre: 'Carlos Ruiz', especialidad: 'Cerámica', ubicacion: 'Puebla' },
  { id: 'a3', nombre: 'Ana Gómez', especialidad: 'Alebrijes', ubicacion: 'Chiapas' },
];

// 3 Productos de prueba
const productos: Producto[] = [
  {
    id: 'p1',
    nombre: 'Huipil Bordado a Mano',
    precio: 1200,
    imagen: 'https://via.placeholder.com/150/FFB6C1/000000?text=Huipil',
    artesano: artesanos[0],
  },
  {
    id: 'p2',
    nombre: 'Vajilla de Talavera',
    precio: 2500,
    imagen: 'https://via.placeholder.com/150/ADD8E6/000000?text=Vajilla',
    artesano: artesanos[1],
  },
  {
    id: 'p3',
    nombre: 'Alebrije Gigante',
    precio: 850,
    imagen: 'https://via.placeholder.com/150/98FB98/000000?text=Alebrije',
    artesano: artesanos[2],
  },
];

// Función para exportar los productos a nuestra pantalla
export const obtenerProductos = (): Producto[] => {
  return productos;
};