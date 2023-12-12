<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

# GraphQL API para Gestión de Listas
Este proyecto consiste en una API GraphQL diseñada para manejar listas, ofreciendo funciones de gestión de usuarios, items y sistemas de autenticación y autorización. Aunque actualmente se encuentra en un entorno local, se ha implementado con herramientas como TablePlus y Docker para una gestión de datos eficiente y modularidad. Además, se utiliza JSON Web Tokens (JWT) para garantizar la seguridad en la autenticación.

## Características Principales:
- Usuarios: Gestión de usuarios con funciones de registro, inicio de sesión y perfiles personalizados.

- Items: Manejo de elementos dentro de listas con operaciones CRUD (Crear, Leer, Actualizar, Eliminar).

- Autenticación y Autorización: Implementación de un sistema robusto de autenticación mediante JWT para garantizar la seguridad de los usuarios y autorización de operaciones específicas.

## Herramientas Utilizadas:
- TablePlus: Herramienta de gestión de bases de datos para facilitar la visualización y manipulación de datos.

- Docker: Contenedorización para asegurar la portabilidad y la fácil replicación del entorno de desarrollo.

# Cómo Iniciar el Proyecto Localmente:

1. Clonar el proyecto
2. Copiar el ```env.template``` y renombrar a ```.env```
3. Ejecutar 
```
yarn install
```
4. Levantar la imagen (Docker desktop)
```
docker-compose up -d
```
5. Levantar el backend de Nest
```
yarn start:dev
```
6. Visitar el sitio
```
localhost:3000/graphql
```

## Aspectos Revisados

- [x] **Introducción a GraphQL + Nest:**
   - Inicio con conceptos básicos de GraphQL y configuración inicial en NestJS.

- [x] **Queries y Mutations:**
   - Creación de resolvers para manejar queries y mutations.
   - Exploración de diferentes tipos de queries y argumentos.

- [x] **CRUD con GraphQL:**
   - Desarrollo de operaciones CRUD utilizando GraphQL y servicios personalizados.

- [x] **Autenticación y Autorización:**
   - Implementación de autenticación mediante JWT.
   - Estrategias de seguridad, JWTAuthGuard y autorización por roles.

- [x] **Docker y Despliegue:**
   - Uso de Docker para contenerizar la aplicación.

- [x] **Manejo de Errores y Validaciones:**
   - Identificación y manejo de errores comunes en GraphQL.

## Habilidades Adquiridas

- [x] Desarrollo de API GraphQL con NestJS.
- [x] Implementación de operaciones CRUD eficientes.
- [x] Integración de estrategias de autenticación seguras con JWT.
- [x] Uso de Docker para contenerizar y gestionar la aplicación.

## Pendiente de Revisión

Aunque revisé estos puntos, reconozco que aún hay áreas por explorar y profundizar. Mis próximos pasos incluyen:

- [ ] Explorar más a fondo los aspectos avanzados de NestJS.
- [ ] Profundizar en la gestión de relaciones y filtrado en GraphQL.
- [ ] Mejorar la documentación y personalización de la API.
- [ ] Despliegue en entornos de producción.

Este resumen refleja mi progreso actual y mis metas para el aprendizaje continuo en este proyecto.


