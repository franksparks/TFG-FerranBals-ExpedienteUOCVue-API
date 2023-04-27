# Repositorio de la API del TFG de Ferran Bals Moreno

El propósito de este TFG es el de actualizar la página del expediente de los alumnos de la UOC en Vue3.

## Primeros pasos

Para lanzar la aplicación en local, primero debemos levantar la API localmente.

Se encuentra disponible en: https://github.com/franksparks/TFG-Expediente-API

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

## Aplicación Vue.js

La aplicación se encuentra disponible en: https://github.com/franksparks/expediente

### Vue3: Instalación de dependencias

```sh
npm install
```

### Vue3: Inicializando en local

```sh
npm run dev
```

La dirección local por defecto de nuestro proyecto Vue3 es: http://localhost:5173

### API y variables de entorno

La aplicación Vue hace una serie de llamadas HTTP para obtener la información de unos expedientes de muestra.

- En un entorno de desarrollo, las llamadas se hacen a http://localhost:5001/
- En un entorno de producción, las llamadas se hacen a https://tfg-ferran-bals-expediente-api.vercel.app/

Esas direcciones estas configuradas como variables de entorno, no es necesario editar sus valores.

### API y MongoDB

Se han configurado dos bases de datos en MongoDB, una para pruebas en local y otra para producción.

- Las credenciales para conectar a la base de datos para local se encuentran en un archivo .env en el repositorio de la API.
- Las credenciales para conectar a la base de datos para Producción se han configurado en vercel, donde se ha desplegado la API.

En ninguno de los casos es necesario editar esas credenciales.

## Producción

URL de la aplicación

- https://expedienteuoc.vercel.app/

URL de la API

- https://tfg-ferran-bals-expediente-api.vercel.app/

Mediante la aplicación se llaman a una serie de endpoints en la API, que reciben la información requerida de una base de datos MongoDB.
