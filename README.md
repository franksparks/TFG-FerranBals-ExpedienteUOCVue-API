# Repositorio de la API del TFG de Ferran Bals Moreno

El propósito de este TFG es el de actualizar la página del expediente de los alumnos de la UOC en Vue3.

## Primeros pasos

Para lanzar la aplicación en local, primero debemos levantar la API localmente.

### API: Instalación de dependencias

```sh
npm install
```

### API: Inicializando en local

```sh
node index.js
```

Con esto, la API está levantado y lista para recibir peticiones.

Podemos comprobarlo accediendo a: http://localhost:5001/

### API y variables de entorno

El proyecto hace una serie de llamadas HTTP para obtener la información de unos expedientes de muestra.

- En un entorno de desarrollo, las llamadas se hacen a http://localhost:5001/
- En un entorno de producción, las llamadas se hacen a https://tfg-ferran-bals-expediente-api.vercel.app/

## Arrancando el proyecto Vue3

Se encuentra disponible en: https://github.com/franksparks/expediente

### Vue3: Instalación de dependencias

```sh
npm install
```

### Vue3: Inicializando en local

```sh
npm run dev
```

La dirección por defecto de nuestro proyecto Vue3 es: http://localhost:5173
