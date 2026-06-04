```markdown
# Proyecto de Programación Móvil - React Native

Este repositorio contiene la estructura base, documentación y ejemplos prácticos para el desarrollo de aplicaciones móviles utilizando **React Native**.

---

## ¿Qué es React Native?

**React Native** es un framework de código abierto creado por Meta (Facebook) que permite el desarrollo de aplicaciones móviles nativas para **iOS** y **Android** utilizando JavaScript y React.

A diferencia de las aplicaciones híbridas tradicionales basadas en WebView, React Native no renderiza elementos web HTML. En su lugar, invoca de manera asíncrona los componentes de interfaz de usuario nativos de cada sistema operativo (como `UIView` en iOS o `android.view` en Android). Esto proporciona un rendimiento óptimo, transiciones fluidas y una experiencia de usuario (UX) completamente nativa con un único flujo de código compartido.

---

##  Buenas Prácticas

Para mantener un proyecto escalable, legible y con un alto rendimiento, se recomienda seguir los siguientes lineamientos:

1. **Arquitectura de Componentes Funcionales:** Utilizar componentes funcionales en lugar de componentes de clase, aprovechando al máximo los React Hooks (`useState`, `useEffect`, `useMemo`, etc.).
2. **Modularización y Separación de Conceptos:** Separar la lógica de negocio (Hooks personalizados, servicios de API) de la lógica de presentación (UI/Componentes).
3. **Uso Eficiente de Estilos:** Evitar los estilos en línea (*inline styles*) dentro del JSX para componentes que se re-renderizan frecuentemente. Utilizar `StyleSheet.create()` para que los estilos se envíen de forma eficiente a través del puente nativo una sola vez.
4. **Manejo de Estados Globales Limpio:** Para estados complejos o compartidos entre múltiples pantallas, implementar soluciones robustas como Context API, Redux Toolkit o Zustand, evitando el *prop drilling*.
5. **Optimización de Listas:** Al renderizar colecciones de datos masivas o dinámicas, utilizar siempre `FlatList` o `SectionList` en lugar de mapear arreglos dentro de un `ScrollView`. Esto asegura la reutilización de celdas en memoria.
6. **Manejo de Variables de Entorno:** Nunca hardcodear credenciales, llaves de API o URLs de servidores en el código fuente. Utilizar archivos `.env` y herramientas de configuración del entorno seguros.

---

##  Estructura del Proyecto

A continuación se detalla la estructura modular recomendada para un proyecto moderno (basado en flujos de trabajo con Expo / React Native nativo):

```text
mi-primer-app/
├── assets/               # Imágenes, fuentes, iconos y recursos estáticos
├── src/                  # Directorio principal del código fuente
│   ├── components/       # Componentes atómicos y reutilizables (Botones, Tarjetas, Inputs)
│   ├── constants/        # Valores globales constantes (Paleta de colores, configuraciones)
│   ├── hooks/            # Custom Hooks para abstraer lógica compartida
│   ├── navigation/       # Configuración de rutas y navegadores (Stack, Tabs, Drawer)
│   ├── screens/          # Pantallas principales de la aplicación
