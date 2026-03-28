# 🅰️ Frontend Angular + PrimeNG

Aplicación Angular que consume el backend FastAPI con componentes de **PrimeNG**.

## ✨ Funcionalidades

- Llamar al endpoint `GET /` — Hola Mundo
- Llamar al endpoint `GET /saludo/{nombre}` — Saludo personalizado
- Historial de llamadas a la API
- Notificaciones con Toast de PrimeNG
- Interfaz responsiva con PrimeFlex

## 📋 Requisitos

- Node.js 18+
- npm 9+
- Angular CLI 21
- Backend FastAPI corriendo en `http://localhost:8000`

## ⚙️ Ejecución local

### 1. Clona el repositorio

```bash
git clone https://github.com/amsalamancaamirai/basico_frontend.git
cd basico_frontend
```

### 2. Instala dependencias

```bash
npm install
```

### 3. Levanta el servidor de desarrollo

```bash
ng serve
```

Abre `http://localhost:4200` en tu navegador.

> ⚠️ Asegúrate de tener el backend corriendo en `http://localhost:8000`

## 🏗️ Build para producción

```bash
ng build --configuration production
```

Los archivos se generan en `dist/frontend/`.

## 🐳 Despliegue con Docker

### 1. Construye la imagen

```bash
docker build -t basico-frontend .
```

### 2. Corre el contenedor

```bash
docker run -d -p 4200:80 --name basico-frontend basico-frontend
```

Abre `http://localhost:4200` en tu navegador.

### Docker Compose (frontend + backend juntos)

```bash
docker compose up -d
```

## 🛠️ Tecnologías

| Tecnología | Versión |
|-----------|---------|
| Angular | 21 |
| PrimeNG | 21 |
| PrimeFlex | 4 |
| PrimeIcons | 7 |

## 📁 Estructura del proyecto

```
src/
├── app/
│   ├── services/
│   │   └── api.service.ts    # Servicio HTTP para el backend
│   ├── app.ts                # Componente principal
│   ├── app.html              # Template con componentes PrimeNG
│   ├── app.scss              # Estilos
│   └── app-module.ts         # Módulo raíz
├── styles.scss               # Estilos globales y tema PrimeNG
└── main.ts                   # Bootstrap
```
