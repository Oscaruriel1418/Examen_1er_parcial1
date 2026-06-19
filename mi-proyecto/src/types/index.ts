export interface Artesano {
  id: string;
  nombre: string;
  especialidad: string;
  ubicacion: string;
}

export interface Producto {
  id: string;
  nombre: string;
  precio: number;
  imagen: string;
  artesano: Artesano; // Relacionamos el producto con el artesano
}

export interface Oferta {
  id: string;
  productoId: string;
  monto: number;
  estado: 'pendiente' | 'aceptada' | 'rechazada';
}